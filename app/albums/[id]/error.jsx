"use client";

import { useEffect } from "react";
import styles from "../error.module.css";

export default function AlbumDetailError({ error, reset }) {
  useEffect(() => {
    console.error("Album detail error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Failed to load album</h2>
        <p className={styles.message}>
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <button className={styles.button} onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
