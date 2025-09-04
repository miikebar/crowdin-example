import { useI18N } from "@crowdin-example/i18n";

export function AuthForm() {
  const { t } = useI18N();

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label htmlFor="email">{t("auth:email")}</label>
        <input id="email" type="email" placeholder={t("auth:email")} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label htmlFor="password">{t("auth:password")}</label>
        <input id="password" type="password" placeholder={t("auth:password")} />
      </div>
      <button style={{ padding: "8px 16px" }} type="submit">
        {t("auth:signIn")}
      </button>
    </form>
  );
}
