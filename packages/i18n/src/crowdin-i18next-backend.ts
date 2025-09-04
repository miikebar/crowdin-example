import OTAClient from "@crowdin/ota-client";
import type { Module, ModuleType } from "i18next";

export class CrowdinI18nextBackend implements Module {
  readonly type: ModuleType;
  private clients: Map<string, OTAClient>;

  constructor(registry: { namespace: string; distributionHash: string }[]) {
    this.type = "backend";
    this.clients = new Map(
      registry.map(({ namespace, distributionHash }) => [
        namespace,
        new OTAClient(distributionHash),
      ])
    );
  }

  read(
    language: string,
    namespace: string,
    callback: (error: Error | null, value: unknown) => void
  ) {
    const client = this.clients.get(namespace);

    if (!client) {
      return callback(
        new Error(
          `[Crowdin OTA Backend]Client not found for namespace: ${namespace}`
        ),
        null
      );
    }

    client
      .getStringsByLocale(language)
      .then((value) => callback(null, value))
      .catch((e) => callback(e, null));
  }
}
