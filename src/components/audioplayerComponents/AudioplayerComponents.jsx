import classNames from "classnames";
import styles from "./AudioplayerComponents.module.css";

export const Prev = () => {
  return (
    <div className={styles.playerBtnPrev}>
      <svg className={styles.playerBtnPrevSvg} alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>
  );
};

export const Play = () => {
  return (
    <div className={classNames(styles.playerBtnPlay, styles._btn)}>
      <svg className={styles.playerBtnPlaySvg} alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
};

export const Next = () => {
  return (
    <div className={styles.playerBtnNext}>
      <svg className={styles.playerBtnNextSvg} alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>
  );
};

export const Repeat = () => {
  return (
    <div className={classNames(styles.playerBtnRepeat, styles._btnIcon)}>
      <svg className={styles.playerBtnRepeatSvg} alt="repeat">
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>
  );
};

export const Shuffle = () => {
  return (
    <div className={classNames(styles.playerBtnShuffle, styles._btnIcon)}>
      <svg className={styles.playerBtnShuffleSvg} alt="shuffle">
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

export function TrackPlayAuthor() {
  return (
    <div className={styles.trackPlayAuthor}>
      <a className={styles.trackPlayAuthorLink} href="http://">
        Ты та...
      </a>
    </div>
  );
}

export function TrackPlayAlbum() {
  return (
    <div className={styles.trackPlayAlbum}>
      <a className={styles.trackPlayAlbumLink} href="http://">
        Баста
      </a>
    </div>
  );
}

export function TrackPlayLike() {
  return (
    <div className={styles.trackPlayLikeDis}>
      <div className={classNames(styles.trackPlayLike, styles._btnIcon)}>
        <svg className={styles.trackPlayLikeSvg} alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
      </div>
      <div className={classNames(styles.trackPlayDislike, styles._btnIcon)}>
        <svg className={styles.trackPlayDislikeSvg} alt="dislike">
          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
        </svg>
      </div>
    </div>
  );
}
