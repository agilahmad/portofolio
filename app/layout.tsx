import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agil Ahmad Maulana — Backend Engineer",
  description:
    "Portfolio of Agil Ahmad Maulana, a PHP/Laravel backend engineer specialising in secure web applications and cybersecurity platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
