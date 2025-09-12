import { RootProvider } from "fumadocs-ui/provider";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: {
    template: "%s | LogChimp Docs",
    default: "LogChimp Docs",
  },
  description:
    "Meet a next-generation software turning feedback into a future roadmap. LogChimp makes every customer voice count.",
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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
