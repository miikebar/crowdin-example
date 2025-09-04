import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <div>
      <h1>Server Component</h1>
      <p>{t("header")}</p>
    </div>
  );
}
