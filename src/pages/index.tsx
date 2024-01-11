import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>malkeet.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="https://picsum.photos/200/200"
        alt="Avatar"
        className={styles.avatar}
      />
      <div className={styles.title}>Malkeet Singh (Mel)</div>
      <div className={styles.text}>
        Software developer - passionate about problem solving and empowering
        teams.
      </div>
      {user ? (
        <div>
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
          <br></br>
          Your nickname is {user.name}.
        </div>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </div>
  );
}
