import UserCard from "@/components/UserCard/UserCard";
import styles from "./users.module.css";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Users</h1>
        <div className={styles.grid}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}
