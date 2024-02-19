function TrackTitleImg() {
  return (
    <div className="track__title-image">
      <svg className="track__title-svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
}
function TrackTitleText(props) {
  return (
    <div className="track__title-text">
      <a className="track__title-link" href="http://">
        {props.title}
        <span className="track__title-span"></span>
      </a>
    </div>
  );
}
export function TrackTitle(props) {
  return (
    <div className="track__title">
      <TrackTitleImg />
      <TrackTitleText title={props.title} />
    </div>
  );
}
export function TrackAuthor(props) {
  return (
    <div className="track__author">
      <a className="track__author-link" href="http://">
        {props.author}
      </a>
    </div>
  );
}
export function TrackAlbum(props) {
  return (
    <div className="track__album">
      <a className="track__album-link" href="http://">
        {props.album}
      </a>
    </div>
  );
}
export function TrackTime(props) {
  return (
    <div className="track__time">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
      <span className="track__time-text">{props.time}</span>
    </div>
  );
}
