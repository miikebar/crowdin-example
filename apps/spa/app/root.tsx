import i18n from "i18next";
import HttpApi, { type HttpBackendOptions } from "i18next-http-backend";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { Outlet, Scripts } from "react-router";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: "en_US",
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
    <html lang="en_US">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <Outlet />
        </I18nextProvider>
        <Scripts />
      </body>
    </html>
  );
}
