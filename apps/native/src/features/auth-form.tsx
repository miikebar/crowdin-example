import { useTranslation } from "react-i18next";
import { Button, View } from "react-native";
import { Input } from "../components/input";
import { Label } from "../components/label";

export function AuthForm() {
  const { t } = useTranslation();

  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <View>
        <Label>{t("auth:email")}</Label>
        <Input placeholder={t("auth:email")} />
      </View>
      <View>
        <Label>{t("auth:password")}</Label>
        <Input placeholder={t("auth:password")} />
      </View>
      <Button title={t("auth:signIn")} onPress={() => {}} />
    </View>
  );
}
