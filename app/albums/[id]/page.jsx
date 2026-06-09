import { getAlbumById } from "@/shared/services/albumService";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./albumDetail.module.css";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const album = await getAlbumById(id).catch(() => null);
  if (!album) return { title: "Album Not Found" };
  return {
    title: album.title,
    description: `View details of album "${album.title}" — Album #${album.id} from JSONPlaceholder.`,
    keywords: ["album", "photo", "gallery", `album-${album.id}`],
    openGraph: {
      title: album.title,
      description: `View details of album "${album.title}".`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: album.title,
      description: `View details of album "${album.title}".`,
    },
  };
}

export default async function AlbumDetailPage({ params }) {
  const { id } = await params;
  const album = await getAlbumById(id).catch(() => null);

  if (!album) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/albums" className={styles.back}>
        ← Back to albums
      </Link>
      <article className={styles.article}>
        <span className={styles.id}>Album #{album.id}</span>
        <h1 className={styles.title}>{album.title}</h1>
        <p className={styles.meta}>User ID: {album.userId}</p>
      </article>
    </div>
  );
}
