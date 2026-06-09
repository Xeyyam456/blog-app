import UserDetail from "@/components/UserDetail/UserDetail";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Blog Posts</h1>
        <div className={styles.grid}>
          {posts.map((post) => (
            <UserDetail key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
