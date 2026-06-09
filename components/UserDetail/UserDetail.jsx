"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import styles from "@/components/UserDetail/UserCard.module.css";

export default function UserDetail({ post }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>
        {expanded ? post.body : post.body.slice(0, 100) + "..."}
      </p>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </div>
  );
}
