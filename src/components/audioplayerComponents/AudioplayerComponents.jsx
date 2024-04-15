import classNames from "classnames";
import styles from "./AudioplayerComponents.module.css";
import { useThemeContext } from "../../themesComponent/ThemesComponent";

export const Prev = ({ playPrevTrack }) => {
  const handleClick = () => {
    playPrevTrack();
  };
  return (
    <div className={styles.playerBtnPrev} onClick={handleClick}>
      <svg className={styles.playerBtnPrevSvg} alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>
  );
};

export const Play = ({ togglePlay }) => {
  const handleClick = () => {
    togglePlay();
  };
  return (
    <div
      className={classNames(styles.playerBtnPlay, styles._btn)}
      onClick={handleClick}
    >
      <svg className={styles.playerBtnPlaySvg} alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
};

export const Pause = ({ togglePause }) => {
  const handleClick = () => {
    togglePause();
  };
  return (
    <div
      className={classNames(styles.playerBtnPause, styles._btn)}
      onClick={handleClick}
    >
      <svg className={styles.playerBtnPauseSvg} alt="pause">
        <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
      </svg>
    </div>
  );
};

export const Next = ({ playNextTrack }) => {
  const handleClick = () => {
    playNextTrack();
  };
  return (
    <div className={styles.playerBtnNext} onClick={handleClick}>
      <svg className={styles.playerBtnNextSvg} alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>
  );
};

export const Repeat = ({ playRepeatTrack, isActive }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
      onClick={playRepeatTrack}
    >
      <svg
        className={
          theme.mode === "dark"
            ? !isActive
              ? styles.playerBtnShuffleSvg
              : classNames(styles.playerBtnShuffleSvg, styles.active)
            : !isActive
            ? classNames(styles.playerBtnShuffleSvg, styles.lightToggle)
            : classNames(styles.playerBtnShuffleSvg, styles.lightImgActive)
        }
        alt="repeat"
      >
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>
  );
};

export const Shuffle = ({ isActive, playShuffleTrack }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
      onClick={playShuffleTrack}
    >
      <svg
        className={
          theme.mode === "dark"
            ? !isActive
              ? styles.playerBtnShuffleSvg
              : classNames(styles.playerBtnShuffleSvg, styles.active)
            : !isActive
            ? classNames(styles.playerBtnShuffleSvg, styles.lightToggle)
            : classNames(styles.playerBtnShuffleSvg, styles.lightImgActive)
        }
        alt="shuffle"
      >
        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>
  );
};

export const TrackPlayImage = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={
        theme.mode === "dark" ? styles.trackPlayImage : styles.lightImg
      }
    >
      <svg className={styles.trackPlaySvg} alt="music">
        <use xlinkHref={"img/icon/sprite.svg#icon-note-dark"}></use>
      </svg>
    </div>
  );
};

export function TrackPlayAuthor({ name }) {
  const { theme } = useThemeContext();
  return (
    <div className={styles.trackPlayAuthor}>
      <div
        className={
          theme.mode === "dark" ? styles.trackPlayAuthorLink : styles.light
        }
        href="http://"
      >
        {name}
      </div>
    </div>
  );
}

export function TrackPlayAlbum({ author }) {
  const { theme } = useThemeContext();
  return (
    <div className={styles.trackPlayAlbum}>
      <div
        className={
          theme.mode === "dark" ? styles.trackPlayAlbumLink : styles.light
        }
        href="http://"
      >
        {author}
      </div>
    </div>
  );
}

export function TrackPlayLike() {
  return (
    <div className={styles.trackPlayLikeDis}>
      <div
        className={classNames(styles.trackPlayLike, styles._btnIcon)}
        onClick={() => alert("логика еще не написана")}
      >
        <svg className={styles.trackPlayLikeSvg} alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
      </div>
      <div
        className={classNames(styles.trackPlayDislike, styles._btnIcon)}
        onClick={() => alert("логика еще не написана")}
      >
        <svg className={styles.trackPlayDislikeSvg} alt="dislike">
          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
        </svg>
      </div>
    </div>
  );
}
