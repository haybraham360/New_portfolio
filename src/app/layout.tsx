import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { KeyboardShortcuts } from "@/components/interactive/keyboard-shortcuts";
import { ToastProvider } from "@/components/interactive/toast-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile } from "@/content/profile";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  title,
  description: profile.description,
  authors: [{ name: profile.name, url: profile.links.github }],
  openGraph: {
    type: "profile",
    title,
    description: profile.description,
  },
  twitter: { card: "summary", title, description: profile.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a101f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-full bg-btn px-4 py-2.5 text-sm font-medium text-btn-fg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ToastProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="mx-auto w-full max-w-page flex-1 px-4 outline-none sm:px-6 lg:px-8">
            {children}
          </main>
          <SiteFooter />
          <KeyboardShortcuts />
        </ToastProvider>
      </body>
    </html>
  );
}
