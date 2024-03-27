import styles from "./TrackTitleComponent.module.css";

export const TrackTitleImg = () => {
  return (
    <div className={styles.trackTitleImage}>
      <svg className={styles.trackTitleSvg} alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
};

export const TrackTitleText = (props) => {
  return (
    <div className={styles.trackTitleText}>
      <a className={styles.trackTitleLink}>
        {props.title}
        <span className={styles.trackTitleSpan}></span>
      </a>
    </div>
  );
};
