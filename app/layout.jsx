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
  title: "Blog App",
  description: "Next.js blog app with SSR and App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Blog App
          </Link>
          <Link href="/posts" className={styles.navLink}>
            Posts
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
