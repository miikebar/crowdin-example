import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { AppI18NProvider } from "~/i18n/provider";
import { routing } from "~/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<Props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <AppI18NProvider>{children}</AppI18NProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
