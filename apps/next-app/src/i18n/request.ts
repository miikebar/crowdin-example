import { LOCALE_CONFIG as AUTH_LOCALE_CONFIG } from "@crowdin-example/auth";
import OtaClient from "@crowdin/ota-client";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const DEFAULT_NAMESPACE = "translation";

const CROWDIN_CLIENTS = new Map<string, OtaClient>([
  [DEFAULT_NAMESPACE, new OtaClient("feab11c18bc97e1094664b9u26r")],
  [
    AUTH_LOCALE_CONFIG.namespace,
    new OtaClient(AUTH_LOCALE_CONFIG.distributionHash),
  ],
]);

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await Promise.all(
    [...CROWDIN_CLIENTS.entries()].map(async ([namespace, client]) => {
      const strings = await client.getStringsByLocale(locale);

      if (namespace === DEFAULT_NAMESPACE) {
        // The translation namespace is the default namespace
        return strings;
      }

      return {
        [namespace]: strings,
      };
    })
  );

  return {
    locale,
    messages: Object.assign({}, ...messages) ?? {},
  };
});
