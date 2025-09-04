import { useActionSheet } from "@expo/react-native-action-sheet";
import { getI18n } from "react-i18next";
import { Button } from "react-native";

export function LanguageSwitcher() {
  const { showActionSheetWithOptions } = useActionSheet();

  return (
    <Button
      title="Change Language"
      onPress={() =>
        showActionSheetWithOptions(
          {
            title: "Change Language",
            options: ["English", "Polish", "German", "Cancel"],
            cancelButtonIndex: 3,
          },
          (selectedIndex) => {
            if (selectedIndex === 0) {
              getI18n().changeLanguage("en");
            } else if (selectedIndex === 1) {
              getI18n().changeLanguage("pl");
            } else if (selectedIndex === 2) {
              getI18n().changeLanguage("de");
            }
          }
        )
      }
    />
  );
}
