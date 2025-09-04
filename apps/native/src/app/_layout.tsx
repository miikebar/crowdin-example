import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { I18NProvider } from "../i18n/provider";

export default function RootLayout() {
  return (
    <I18NProvider>
      <ActionSheetProvider>
        <Stack />
      </ActionSheetProvider>
    </I18NProvider>
  );
}
