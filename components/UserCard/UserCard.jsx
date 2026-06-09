import Image from "next/image";
import styles from "@/components/UserCard/UserCard.module.css";

export default function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
        width={80}
        height={80}
        loading="eager"
        className={styles.avatar}
      />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.company}>{user.company.name}</p>
     
    </div>
  );
}
