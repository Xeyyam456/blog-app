import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://blog-app.vercel.app"),
  title: {
    default: "Blog App",
    template: "%s | Blog App",
  },
  description:
    "A modern blog application built with Next.js App Router featuring posts, albums and users with server-side rendering.",
  keywords: ["blog", "next.js", "SSR", "app router", "posts", "albums"],
  authors: [{ name: "Blog App" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "Blog App",
    title: "Blog App",
    description:
      "A modern blog application built with Next.js App Router featuring posts, albums and users.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog App",
    description:
      "A modern blog application built with Next.js App Router.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav aria-label="Main navigation" className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Blog App
          </Link>
          <Link href="/posts" className={styles.navLink}>
            Posts
          </Link>
          <Link href="/albums" className={styles.navLink}>
            Albums
          </Link>
          <Link href="/users" className={styles.navLink}>
            Users
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
