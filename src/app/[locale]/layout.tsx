import "../../styles/global.scss";
import { charm, kanit, prompt } from "@/styles/variables/fonts";
import { NextIntlClientProvider, useMessages } from "next-intl";

interface LocaleLayoutProp {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProp) {
  const messages = useMessages();

  return (
    <html lang={locale} className={`${charm.className} ${prompt.className}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
