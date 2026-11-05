import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const instant = false;

// Vẫn cần để build sẵn /vi và /en
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={montserrat.variable}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        <NextIntlClientProvider>
          <Header />
          <main className="page-container py-6">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
