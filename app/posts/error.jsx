"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function PostsError({ error, reset }) {
  useEffect(() => {
    console.error("Posts page error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Something went wrong!</h2>
        <p className={styles.message}>
          {error?.message || "Failed to fetch posts. Please try again."}
        </p>
        <button className={styles.button} onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
