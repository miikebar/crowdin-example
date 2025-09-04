import { AuthForm } from "@crowdin-example/auth";
import { LanguageSwitcher, useI18N } from "@crowdin-example/i18n";

export default function IndexPage() {
  const { t } = useI18N();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h1>{t("header")}</h1>
      <LanguageSwitcher />
      <AuthForm />
    </div>
  );
}
