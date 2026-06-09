import styles from "./loading.module.css";

export default function AlbumsLoading() {
  return (
    <div>
      <div className={styles.subSkeleton} />
      <div className={styles.grid}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.idSkeleton} />
            <div className={styles.titleSkeleton} />
            <div className={styles.btnSkeleton} />
          </div>
        ))}
      </div>
    </div>
  );
}
