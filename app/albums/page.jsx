import { getAllAlbums } from "@/shared/services/albumService";
import AlbumCard from "@/components/AlbumCard/AlbumCard";
import styles from "./albums.module.css";

export const revalidate = 60;

export default async function AlbumsPage() {
  const albums = await getAllAlbums();

  return (
    <section aria-label="Albums list">
      <h1 className={styles.heading}>All Albums</h1>
      <p className={styles.subheading}>{albums.length} albums found</p>
      <div className={styles.grid}>
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}
