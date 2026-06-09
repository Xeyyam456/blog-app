import Link from "next/link";
import styles from "./AlbumCard.module.css";

export default function AlbumCard({ album }) {
  return (
    <Link href={`/albums/${album.id}`} className={styles.card}>
      <span className={styles.id}>#{album.id}</span>
      <h2 className={styles.title}>{album.title}</h2>
      <span className={styles.viewBtn}>View Album →</span>
    </Link>
  );
}
