import classNames from "classnames";
import styles from "./VolumeBlock.module.css";
import { useState } from "react";
import { useThemeContext } from "../../../themesComponent/ThemesComponent";
import { useDispatch, useSelector } from "react-redux";
import { setIsMute } from "../../../store/slices/volumeSlice";

export const VolumeBlock = ({ audioRef }) => {
  const isMute = useSelector((store) => store.volume.isMute);
  const [volume, setVolume] = useState(null);
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const changeVolume = (e) => {
    const currentVolume = e.target.value / 100;
    console.log(e);
    setVolume(currentVolume);
    audioRef.current.volume = currentVolume;
  };

  const mute = () => {
    if (audioRef.current.volume !== 0) {
      setVolume(0);
      audioRef.current.volume = 0;
      dispatch(setIsMute(true));
    } else {
      setVolume(0.5);
      audioRef.current.volume = 0.5;
      dispatch(setIsMute(false));
    }
  };

  return (
    <div className={classNames(styles.barVolumeBlock, styles.volume)}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage} onClick={mute}>
          <svg className={styles.volumeSvg} alt="volume">
            <use
              xlinkHref={
                theme.mode === "dark"
                  ? isMute
                    ? "img/icon/sprite.svg#icon-volume-cancel-dark"
                    : "img/icon/sprite.svg#icon-volume-dark"
                  : isMute
                  ? "img/icon/sprite.svg#icon-volume-cancel-light"
                  : "img/icon/sprite.svg#icon-volume-light"
              }
            >
              /
            </use>
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
