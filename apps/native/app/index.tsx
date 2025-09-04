import { getI18n, useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

export default function IndexScreen() {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t("header")}</Text>
      <Pressable onPress={() => getI18n().changeLanguage("pl-PL")}>
        <Text>Change to PL</Text>
      </Pressable>
      <Pressable onPress={() => getI18n().changeLanguage("en-US")}>
        <Text>Change to EN</Text>
      </Pressable>
    </View>
  );
}
