import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCSB TASA",
  description: "Website for UCSB TASA",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header title="UCSB TASA"></Header>
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
