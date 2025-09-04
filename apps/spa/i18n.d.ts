import "i18next";
import en_US from "./public/locales/en_US.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en_US;
    };
  }
}
