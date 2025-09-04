import { useI18N } from "./use-i18n";

export function LanguageSwitcher() {
  const { changeLanguage } = useI18N();

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="pl">Polish</option>
      <option value="de">German</option>
    </select>
  );
}
