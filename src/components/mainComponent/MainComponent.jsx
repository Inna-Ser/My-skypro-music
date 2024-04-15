import { useEffect, useState } from "react";
import { Navigator } from "../navigator/Navigator";
import { Centerblock } from "../centerblock/Centerblock";
import { Sidebar } from "../sidebar/Sidebar";
import { Audioplayer } from "../audioplayer/Audioplayer";
import styles from "./MainComponent.module.css";
import { themes, useThemeContext } from "../../themesComponent/ThemesComponent";
import { useSelector } from "react-redux";

export const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const currentTrack = useSelector((store) => store.tracks.currentTrack)
  const { theme } = useThemeContext();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div>
      <main
        style={theme.mode === "light" ? themes.light : themes.dark}
        className={styles.main}
      >
        <Navigator />
        <Centerblock isLoading={isLoading} />
        <Sidebar isLoading={isLoading} />
      </main>
      {!currentTrack ? null : <Audioplayer />}
      <footer className={styles.footer}></footer>
    </div>
  );
};
