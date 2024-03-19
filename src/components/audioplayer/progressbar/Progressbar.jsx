import { useEffect, useRef, useState } from "react";
import styles from "./Progressbar.module.css";

export function ProgressBar({ audioRef }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressbarRef = useRef(null);

  const changeTiming = (e) => {
    const { value } = e.target;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
      }
    };
  }, [audioRef]);

  useEffect(() => {
    if (progressbarRef.current) {
      const progressBar = progressbarRef.current;
      const percentPlayed = (currentTime / duration) * 100;
      progressBar.style.backgroundSize = `${percentPlayed}% 100%`;
    }
  }, [currentTime, duration]);

  return (
    <input
      className={styles.progressbarInput}
      ref={progressbarRef}
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={changeTiming}
      $color="#b672ff"
    />
  );
}
