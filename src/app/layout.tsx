import type { Metadata, Viewport } from "next";
import { IdleSessionGuard } from "../components/idle-session-guard";
import { NavigationLoader } from "../components/navigation-loader";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "North Fountain Trust Credit Union",
    template: "%s | North Fountain Trust Credit Union",
  },
  description: "Credible, innovative and secured banking.",
  keywords: ["credit union", "digital banking", "member banking", "savings", "payments", "North Fountain"],
  applicationName: "North Fountain Trust Credit Union",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(process.env.APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "North Fountain Trust Credit Union",
    description: "Secure digital banking for individuals and businesses.",
    type: "website",
    url: "/",
    siteName: "North Fountain Trust Credit Union",
    locale: "en_US",
    images: ["/images/nftcunion-corporate-hero-v2.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Fountain Trust Credit Union",
    description: "Secure digital banking for individuals and businesses.",
    images: ["/images/nftcunion-corporate-hero-v2.webp"],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg?v=2", apple: "/icon.svg?v=2" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1f3a",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <IdleSessionGuard />
        <NavigationLoader>{children}</NavigationLoader>
      </body>
    </html>
  );
}
