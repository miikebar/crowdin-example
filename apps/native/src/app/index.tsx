import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { AuthForm } from "../features/auth-form";
import { LanguageSwitcher } from "../i18n/language-switcher";

export default function IndexScreen() {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, gap: 16, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{t("header")}</Text>
      <AuthForm />
      <LanguageSwitcher />
    </View>
  );
}
