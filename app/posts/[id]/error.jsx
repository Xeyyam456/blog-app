"use client";

import { useEffect } from "react";
import styles from "../error.module.css";

export default function PostDetailError({ error, reset }) {
  useEffect(() => {
    console.error("Post detail error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Failed to load post</h2>
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
