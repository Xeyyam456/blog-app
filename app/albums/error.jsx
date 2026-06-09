"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function AlbumsError({ error, reset }) {
  useEffect(() => {
    console.error("Albums error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Something went wrong!</h2>
        <p className={styles.message}>
          {error?.message || "Failed to fetch albums. Please try again."}
        </p>
        <button className={styles.button} onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
