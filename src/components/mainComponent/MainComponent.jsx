import { useEffect, useState } from "react";
import { Navigator } from "../navigator/Navigator";
import { Centerblock } from "../centerblock/Centerblock";
import { Sidebar } from "../sidebar/Sidebar";
import { Audioplayer } from "../audioplayer/Audioplayer";
import styles from "./MainComponent.module.css";

export const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div>
      <main style={{ backgroundColor: "#181818" }} className={styles.main}>
        <Navigator />
        <Centerblock isLoading={isLoading} setCurrentTrack={setCurrentTrack} />
        <Sidebar isLoading={isLoading} />
      </main>
      {!currentTrack ? null : <Audioplayer currentTrack={currentTrack} />}
      <footer className={styles.footer}></footer>
    </div>
  );
};
