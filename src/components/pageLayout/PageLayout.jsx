import { useEffect, useState } from "react";
import { Audioplayer } from "../audioplayer/Audioplayer";
import { Navigator } from "../navigator/Navigator";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./PageLayout.module.css";
import { useSelector } from "react-redux";
import { themes, useThemeContext } from "../../themesComponent/ThemesComponent";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useThemeContext();
  const currentTrack = useSelector((store) => store.tracks.currentTrack);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <div>
      <main
        style={theme.mode === "light" ? themes.light : themes.dark}
        className={styles.main}
      >
        {" "}
        <Navigator />
        <Outlet /> 
        <Sidebar isLoading={isLoading} />
        {!currentTrack ? null : <Audioplayer />}
      </main>
      {!currentTrack ? null : <Audioplayer />}
      <footer className={styles.footer}></footer>
    </div>
  );
};
