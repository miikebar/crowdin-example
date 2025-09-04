import {
  CrowdinI18nextBackend,
  I18NProvider,
  type I18NImplementation,
} from "@crowdin-example/i18n";
import i18n from "i18next";
import type { PropsWithChildren } from "react";
import {
  getI18n,
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next";

if (typeof window !== "undefined") {
  i18n
    .use(initReactI18next)
    .use(
      new CrowdinI18nextBackend([
        {
          namespace: "translation",
          distributionHash: "ca58442a2f7d9ec0ddeddc9u26r",
        },
        {
          namespace: "auth",
          distributionHash: "9d19c25154006c4aeebe639u26r",
        },
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
}

export function AppI18NProvider({ children }: PropsWithChildren) {
  return (
    <I18nextProvider i18n={i18n}>
      <AppI18NImplementation>{children}</AppI18NImplementation>
    </I18nextProvider>
  );
}

/**
 * Our packages use `@crowdin-example/i18n` to get the translation function.
 * This wrapper is used to provide the translation function to the children.
 *
 * In SPA example we use `react-i18next` to get the translation function.
 * This wrapper is used to provide the translation function to the children.
 */
function AppI18NImplementation({ children }: PropsWithChildren) {
  const { t } = useTranslation();

  return (
    <I18NProvider
      implementation={{
        t: t as I18NImplementation["t"],
        changeLanguage: (lng) => {
          console.log("changeLanguage", lng);
          getI18n().changeLanguage(lng);
        },
      }}
    >
      {children}
    </I18NProvider>
  );
}
