import Link from "next/link";
import styles from "./not-found.module.css";

export default function GlobalNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.message}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className={styles.link}>
          ← Go back home
        </Link>
      </div>
    </div>
  );
}
