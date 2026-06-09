import Link from "next/link";
import styles from "./albumsLayout.module.css";

export const metadata = {
  title: "Albums",
  description:
    "Browse all photo albums fetched from JSONPlaceholder API with server-side rendering.",
  keywords: ["albums", "photos", "gallery", "next.js", "SSR"],
  openGraph: {
    title: "Albums | Blog App",
    description: "Browse all photo albums with server-side rendering.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Albums | Blog App",
    description: "Browse all photo albums with server-side rendering.",
  },
};

export default function AlbumsLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.heading}>Albums</p>
        <nav aria-label="Albums navigation" className={styles.nav}>
          <Link href="/albums" className={styles.navLink}>
            All Albums
          </Link>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </nav>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
