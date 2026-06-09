import { getAllPosts } from "@/shared/services/postService";
import PostCard from "@/components/PostCard/PostCard";
import styles from "./posts.module.css";

export const revalidate = 60;

export const metadata = {
  title: "Posts | Blog App",
  description: "All blog posts fetched from JSONPlaceholder",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Blog Posts</h1>
        <p className={styles.subheading}>
          {posts.length} posts — refreshed every 60 seconds
        </p>
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
