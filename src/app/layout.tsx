import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next/types";

import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  metadataBase: "https://docs.logchimp.codecarrot.net/platform/overview",
  title: {
    template: "%s | LogChimp Docs",
    default: "LogChimp Docs",
  },
  description:
    "Meet a next-generation software turning feedback into a future roadmap. LogChimp makes every customer voice count.",
  alternates: {
    canonical: "platform/overview",
  },
  icons: {
    icon: [
      // favicon
      {
        url: "/dark-favicon/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/light-favicon/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
