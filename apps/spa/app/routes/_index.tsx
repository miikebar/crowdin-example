import { useI18N } from "@crowdin-example/i18n";

export default function IndexPage() {
  const { t } = useI18N();

  return t("header");
}
