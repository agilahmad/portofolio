import type { Metadata } from "next";
import { Geist_Mono, Orbitron } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Lang } from "@/lib/i18n";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agil Ahmad Maulana — Backend Engineer",
  description:
    "Portfolio of Agil Ahmad Maulana, a PHP/Laravel backend engineer specialising in secure web applications and cybersecurity platforms.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const saved = (await cookies()).get("lang")?.value;
  const initialLang: Lang = saved === "id" ? "id" : "en";

  return (
    <html lang={initialLang} suppressHydrationWarning>
      <body className={`${geistMono.variable} ${orbitron.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
