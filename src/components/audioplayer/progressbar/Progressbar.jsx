import { useRef, useState } from "react";
import styles from "./Progressbar.module.css";

export function ProgressBar({ audioRef }) {
  const [currentTime, setCurrentTime] = useState(0);
  const progressbarRef = useRef(null);

  const changeTiming = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(audioRef.current.currentTime);
  };

  audioRef.current &&
    audioRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current.currentTime);
    });

  return (
    <input
      className={styles.progressbarInput}
      ref={progressbarRef}
      type="range"
      min={0}
      value={currentTime}
      step={0.01}
      onChange={changeTiming}
      $color="#b672ff"
    />
  );
}
