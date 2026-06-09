import Link from "next/link";
import styles from "../not-found.module.css";

export default function PostDetailNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.code}>404</span>
        <h2 className={styles.title}>Post Not Found</h2>
        <p className={styles.message}>
          This post does not exist or may have been deleted.
        </p>
        <Link href="/posts" className={styles.link}>
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
