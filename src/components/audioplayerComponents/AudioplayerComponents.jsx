import classNames from "classnames";
import styles from "./AudioplayerComponents.module.css";

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
  return (
    <div
      className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
      onClick={playRepeatTrack}
    >
      <svg
        className={
          !isActive
            ? styles.playerBtnRepeatSvg
            : classNames(styles.playerBtnRepeatSvg, styles.active)
        }
        alt="repeat"
      >
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>
  );
};

export const Shuffle = ({ isActive, playShuffleTrack }) => {
  return (
    <div
      className={classNames(styles.playerBtnShuffle, styles._btnIcon)}
      onClick={playShuffleTrack}
    >
      <svg
        className={
          !isActive
            ? styles.playerBtnShuffleSvg
            : classNames(styles.playerBtnShuffleSvg, styles.active)
        }
        alt="shuffle"
      >
        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>
  );
};

export const TrackPlayImage = () => {
  return (
    <div className={styles.trackPlayImage}>
      <svg className={styles.trackPlaySvg} alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
};

export function TrackPlayAuthor({ name }) {
  return (
    <div className={styles.trackPlayAuthor}>
      <a className={styles.trackPlayAuthorLink} href="http://">
        {name}
      </a>
    </div>
  );
}

export function TrackPlayAlbum({ author }) {
  return (
    <div className={styles.trackPlayAlbum}>
      <a className={styles.trackPlayAlbumLink} href="http://">
        {author}
      </a>
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
