import styles from "./loading.module.css";

export default function PostsLoading() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.headingSkeleton} />
        <div className={styles.subSkeleton} />
        <div className={styles.grid}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.idSkeleton} />
              <div className={styles.titleSkeleton} />
              <div className={styles.bodySkeleton} />
              <div className={styles.linkSkeleton} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
