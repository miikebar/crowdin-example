import { Stack } from "expo-router";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import enUS from "../assets/locales/en-US.json";
import plPL from "../assets/locales/pl-PL.json";

i18n.use(initReactI18next).init({
  lng: "en-US",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "en-US": {
      translation: enUS,
    },
    "pl-PL": {
      translation: plPL,
    },
  },
  load: "currentOnly",
});

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>
      <Stack />
    </I18nextProvider>
  );
}
