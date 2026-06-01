import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";
import "./globals.css";
import FloatingMenu from "@/components/layout/FloatingMenu";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Paper Swan Co.",
  description: "Boutique event styling, balloons, grazing tables, and custom decor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${inter.variable}`}>
      <body>
  <FloatingMenu />
  {children}
</body>
    </html>
  );
}
