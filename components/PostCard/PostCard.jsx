import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.id}`} className={styles.card}>
      <span className={styles.id}>#{post.id}</span>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body.slice(0, 100)}...</p>
      <span className={styles.readMore}>Read more →</span>
    </Link>
  );
}
