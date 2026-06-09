import { getAllPosts } from "@/shared/services/postService";
import PostCard from "@/components/PostCard/PostCard";
import styles from "./posts.module.css";

export const revalidate = 60;

export const metadata = {
  title: "Posts",
  description:
    "Read all blog posts fetched from JSONPlaceholder API. Updated every 60 seconds with incremental static regeneration.",
  keywords: ["posts", "blog", "articles", "next.js", "ISR"],
  openGraph: {
    title: "Posts | Blog App",
    description: "Read all blog posts fetched from JSONPlaceholder API.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Posts | Blog App",
    description: "Read all blog posts fetched from JSONPlaceholder API.",
  },
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
        <section aria-label="Posts grid" className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}
