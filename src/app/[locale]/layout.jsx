import "./gallery.css";
import "./carousel.css";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";
import ScrollToTopButton from "@/components/ScrollButton";

export const metadata = {
  title: "Taraqqiyot NGO",
  description: "Taraqqiyot NTT",
};

export default async function RootLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    redirect(`/${routing.defaultLocale}`);
  }

  const messages = await getMessages(locale);

  return (
    <html className="h-full scroll-smooth" lang={locale}>
      <body
        className={`font-source-sans font-normal antialiased h-full flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <ScrollToTopButton />
      </body>
    </html>
  );
}
