import { TrackTitleImg, TrackTitleText } from "./TrackTitleComponent";
import "./trackComponents.css";

export const TrackTitle = (props) => {
  return (
    <div className="track__title">
      <TrackTitleImg />
      <TrackTitleText title={props.title} />
    </div>
  );
};

export const TrackAuthor = (props) => {
  return (
    <div className="track__author">
      <a className="track__author-link" href="http://">
        {props.author}
      </a>
    </div>
  );
};

export const TrackAlbum = (props) => {
  return (
    <div className="track__album">
      <a className="track__album-link" href="http://">
        {props.album}
      </a>
    </div>
  );
};

export const TrackTime = (props) => {
  return (
    <div className="track__time">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
      <span className="track__time-text">{props.time}</span>
    </div>
  );
};
