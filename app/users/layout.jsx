export const metadata = {
  title: "Users",
  description:
    "Browse all users fetched client-side from JSONPlaceholder API.",
  keywords: ["users", "people", "client-side", "next.js"],
  openGraph: {
    title: "Users | Blog App",
    description: "Browse all users fetched client-side from JSONPlaceholder.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Users | Blog App",
    description: "Browse all users fetched client-side from JSONPlaceholder.",
  },
};

export default function UsersLayout({ children }) {
  return children;
}
