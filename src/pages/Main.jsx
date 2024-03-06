import { useEffect, useState } from "react";
import { Navigator } from "../components/navigator/Navigator";
import { Centerblock } from "../components/centerblock/Centerblock";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Audioplayer } from "../components/audioplayer/Audioplayer";
import styles from "../App.module.css";

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div>
      <main className={styles.main}>
        <Navigator />
        <Centerblock isLoading={isLoading} />
        <Sidebar isLoading={isLoading} />
      </main>
      <Audioplayer />
      <footer className={styles.footer}></footer>
    </div>
  );
};
