import { getAllAlbums } from "@/shared/services/albumService";
import AlbumCard from "@/components/AlbumCard/AlbumCard";
import styles from "./page.module.css";

export const revalidate = 60;

export const metadata = {
  title: "Home",
  description:
    "Browse all albums fetched from JSONPlaceholder API with server-side rendering.",
  keywords: ["albums", "home", "gallery", "next.js", "SSR"],
  openGraph: {
    title: "Home | Blog App",
    description: "Browse all albums with server-side rendering.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Home | Blog App",
    description: "Browse all albums with server-side rendering.",
  },
};

export default async function Home() {
  const albums = await getAllAlbums();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Albums</h1>
        <p className={styles.subheading}>
          Click an album to view its details
        </p>
        <div className={styles.grid}>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </main>
    </div>
  );
}
