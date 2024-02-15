function TrackTitleImg(props) {
  <div className="track__title-image">
    <svg className="track__title-svg" alt="music">
      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
    </svg>
  </div>;
}
function TrackTitleText(props) {
  <div className="track__title-text">
    <a className="track__title-link" href="http://">
      {props.name}
      <span className="track__title-span"></span>
    </a>
  </div>;
}
function TrackTitle() {
  <div className="track__title">
    <TrackTitleImg />
    <TrackTitleText />
  </div>;
}
function TrackAuthor(props) {
  <div className="track__author">
    <a className="track__author-link" href="http://">
      {props.author}
    </a>
  </div>;
}
function TrackAlbum(props) {
  <div className="track__album">
    <a className="track__album-link" href="http://">
      {props.album}
    </a>
  </div>;
}
function TrackTime(props) {
  <div className="track__time">
    <svg className="track__time-svg" alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
    </svg>
    <span className="track__time-text">{props.duration_in_seconds}</span>
  </div>;
}
export function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <TrackTitle />
        <TrackAuthor />
        <TrackAlbum />
        <TrackTime />
      </div>
    </div>
  );
}
