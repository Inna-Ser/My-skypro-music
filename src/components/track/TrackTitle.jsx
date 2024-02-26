import "./trackTitle.css";

export const TrackTitleImg = () => {
  return (
    <div className="track__title-image">
      <svg className="track__title-svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
};

export const TrackTitleText = (props) => {
  return (
    <div className="track__title-text">
      <a className="track__title-link" href="http://">
        {props.title}
        <span className="track__title-span"></span>
      </a>
    </div>
  );
};

