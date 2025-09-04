import { I18NProvider, type I18NImplementation } from "@crowdin-example/i18n";
import i18n from "i18next";
import HttpApi, { type HttpBackendOptions } from "i18next-http-backend";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next";
import { Outlet, Scripts } from "react-router";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    load: "currentOnly",
  });

export default function App() {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <AppWithI18N />
        </I18nextProvider>
        <Scripts />
      </body>
    </html>
  );
}

function AppWithI18N() {
  const { t } = useTranslation();

  return (
    <I18NProvider
      implementation={{
        t: t as I18NImplementation["t"],
      }}
    >
      <Outlet />
    </I18NProvider>
  );
}
