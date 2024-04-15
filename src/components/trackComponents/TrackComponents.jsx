import {
  TrackTitleImg,
  TrackTitleText,
} from "./trackTitleComponent/TrackTitleComponent";
import styles from "./TrackComponents.module.css";
import { useThemeContext } from "../../themesComponent/ThemesComponent";

export const TrackTitle = (props) => {
  return (
    <div className={styles.trackTitle}>
      <TrackTitleImg id={props.id} />
      <TrackTitleText title={props.title} />
    </div>
  );
};

export const TrackAuthor = (props) => {
  const { theme } = useThemeContext();

  return (
    <div className={styles.trackAuthor}>
      <div
        className={
          theme.mode === "dark" ? styles.trackAuthorLink : styles.light
        }
      >
        {props.author}
      </div>
    </div>
  );
};

export const TrackAlbum = (props) => {
  return (
    <div className={styles.trackAlbum}>
      <div className={styles.trackAlbumLink}>{props.album}</div>
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
