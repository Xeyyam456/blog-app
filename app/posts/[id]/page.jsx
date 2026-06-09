import { getPostById } from "@/shared/services/postService";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./postDetail.module.css";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostById(id).catch(() => null);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.body,
    keywords: ["post", "blog", "article", `post-${post.id}`],
    openGraph: {
      title: post.title,
      description: post.body,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.body.slice(0, 200),
    },
  };
}

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  const post = await getPostById(id).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/posts" className={styles.back}>
          ← Back to posts
        </Link>
        <article className={styles.article}>
          <span className={styles.id}>Post #{post.id}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.body}>{post.body}</p>
        </article>
      </main>
    </div>
  );
}
