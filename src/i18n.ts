import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "th"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    timeZone: "Asia/Bangkok",
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
