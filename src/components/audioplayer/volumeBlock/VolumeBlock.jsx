import classNames from "classnames";
import styles from "./VolumeBlock.module.css";
import { useState } from "react";

export const VolumeBlock = ({ audioRef }) => {
  const [volume, setVolume] = useState(null);

  const changeVolume = (e) => {
    const currentVolume = e.target.value / 100;
    console.log(e);
    setVolume(currentVolume);
    audioRef.current.volume = currentVolume;
  };

  return (
    <div className={classNames(styles.barVolumeBlock, styles.volume)}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg} alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles._btn)}>
          <input
            className={classNames(styles.volumeProgressLine, styles._btn)}
            type="range"
            name="range"
            onChange={changeVolume}
          />
        </div>
      </div>
    </div>
  );
};
