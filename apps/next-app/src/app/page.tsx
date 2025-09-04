import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  return <h1>{t("header")}</h1>;
}
