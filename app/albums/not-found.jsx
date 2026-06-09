import Link from "next/link";
import styles from "./not-found.module.css";

export default function AlbumsNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.code}>404</span>
        <h2 className={styles.title}>Album Not Found</h2>
        <p className={styles.message}>
          This album does not exist or may have been removed.
        </p>
        <Link href="/albums" className={styles.link}>
          ← Back to all albums
        </Link>
      </div>
    </div>
  );
}
