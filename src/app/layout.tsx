import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif" });
const sans = Montserrat({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "Louis Brown's Brasserie", template: "%s" },
  description: "High Street brasserie demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="bg-[#1a1210] text-[#e8dcc8]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">Louis Brown's</Link>
            <nav className="flex gap-5 text-sm"><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
