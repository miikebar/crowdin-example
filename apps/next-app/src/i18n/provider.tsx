"use client";

import { I18NProvider } from "@crowdin-example/i18n";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export function AppI18NProvider({ children }: PropsWithChildren) {
  const t = useTranslations();
  const router = useRouter();

  return (
    <I18NProvider
      implementation={{
        t: (key, options) =>
          t(
            key.replace(":", "."),
            options as Record<string, string | number | Date>
          ),
        changeLanguage: (lang) => {
          router.push(`/${lang}`);
        },
      }}
    >
      {children}
    </I18NProvider>
  );
}
