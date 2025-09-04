import { LOCALE_CONFIG as AUTH_LOCALE_CONFIG } from "@crowdin-example/auth";
import { CrowdinI18nextBackend } from "@crowdin-example/i18n";
import i18n from "i18next";
import type { PropsWithChildren } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(
    new CrowdinI18nextBackend([
      {
        namespace: "translation",
        distributionHash: "354154a538d300395092019u26r",
      },
      AUTH_LOCALE_CONFIG,
    ])
  )
  .init({
    ns: ["translation", "auth"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    load: "currentOnly",
  });

export function I18NProvider({ children }: PropsWithChildren) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
