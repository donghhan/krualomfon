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
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
