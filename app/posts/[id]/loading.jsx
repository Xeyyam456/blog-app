import styles from "../loading.module.css";

export default function PostDetailLoading() {
  return (
    <div className={styles.page}>
      <main className={styles.detailMain}>
        <div className={styles.detailBackSkeleton} />
        <div className={styles.detailCard}>
          <div className={styles.detailIdSkeleton} />
          <div className={styles.detailTitleSkeleton} />
          <div className={styles.detailBodySkeleton} />
        </div>
      </main>
    </div>
  );
}
