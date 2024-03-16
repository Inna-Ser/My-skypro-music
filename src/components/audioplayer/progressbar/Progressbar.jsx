import { useState } from "react";
import stiles from "./Progressbar.module.css";

export function ProgressBar({ audioRef, duration }) {
  const [currentTime, setCurrentTime] = useState(0);

  const changeTiming = (e) => {
    audioRef.current.currentTime = e.target.value;
    // setCurrentTime(currentTime);
  };

  return (
    <input
      className={stiles.progressbarInput}
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={changeTiming}
      $color="#ff0000"
    />
  );
}
