import styles from "../loading.module.css";

export default function AlbumDetailLoading() {
  return (
    <div className={styles.detailMain}>
      <div className={styles.detailBackSkeleton} />
      <div className={styles.detailCard}>
        <div className={styles.detailIdSkeleton} />
        <div className={styles.detailTitleSkeleton} />
        <div className={styles.detailUserSkeleton} />
      </div>
    </div>
  );
}
