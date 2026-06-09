import Link from "next/link";
import styles from "./not-found.module.css";

export default function PostsNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.code}>404</span>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          The post you are looking for does not exist or has been removed.
        </p>
        <Link href="/posts" className={styles.link}>
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
