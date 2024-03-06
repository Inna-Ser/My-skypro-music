import {
  TrackTitleImg,
  TrackTitleText,
} from "./trackTitleComponent/TrackTitleComponent";
import styles from "./TrackComponents.module.css";

export const TrackTitle = (props) => {
  return (
    <div className={styles.trackTitle}>
      <TrackTitleImg />
      <TrackTitleText title={props.title} />
    </div>
  );
};

export const TrackAuthor = (props) => {
  return (
    <div className={styles.trackAuthor}>
      <a className={styles.trackAuthorLink} href="http://">
        {props.author}
      </a>
    </div>
  );
};

export const TrackAlbum = (props) => {
  return (
    <div className={styles.trackAlbum}>
      <a className={styles.trackAlbumLink} href="http://">
        {props.album}
      </a>
    </div>
  );
};

export const TrackTime = (props) => {
  return (
    <div className={styles.trackTime}>
      <svg className={styles.trackTimeSvg} alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
      <span className={styles.trackTimeText}>{props.time}</span>
    </div>
  );
};
