import { useEffect, useState } from "react";
import { Navigator } from "../components/navigator/Navigator";
import { Centerblock } from "../components/centerblock/Centerblock";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Audioplayer } from "../components/audioplayer/Audioplayer";
import styles from "../App.module.css";

export const Main = ({ getToken }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div>
      <main className={styles.main}>
        <Navigator />
        <Centerblock
          isLoading={isLoading}
          getToken={getToken}
          setCurrentTrack={setCurrentTrack}
        />
        <Sidebar isLoading={isLoading} />
      </main>
      {!currentTrack ? null : <Audioplayer currentTrack={currentTrack} />}
      <footer className={styles.footer}></footer>
    </div>
  );
};
