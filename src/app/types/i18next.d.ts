import "i18next";
import common from "../../../public/locales/ru/common.json";
import main from "../../../public/locales/ru/main.json";
import about from "../../../public/locales/ru/about.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      main: typeof main;
      about: typeof about;
    };
  }
}
