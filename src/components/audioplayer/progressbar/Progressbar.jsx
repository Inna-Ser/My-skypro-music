import { useState } from "react";
import stiles from "./Progressbar.module.css";

export function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(70);
  const duration = 230;

  return (
    <input
      className={stiles.progressbarInput}
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => setCurrentTime(event.target.value)}
      $color="#ff0000"
    />
  );
}
