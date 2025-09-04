import { useTranslation } from "react-i18next";

export default function IndexPage() {
  const { t } = useTranslation();

  return t("header");
}
