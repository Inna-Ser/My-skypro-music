import "./audioplayerComponents.css";

export const Prev = () => {
  return (
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>
  );
};

export const Play = () => {
  return (
    <div className="player__btn-play _btn">
      <svg className="player__btn-play-svg" alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
};

export const Next = () => {
  return (
    <div className="player__btn-next">
      <svg className="player__btn-next-svg" alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>
  );
};

export const Repeat = () => {
  return (
    <div className="player__btn-repeat _btn-icon">
      <svg className="player__btn-repeat-svg" alt="repeat">
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>
  );
};

export const Shuffle = () => {
  return (
    <div className="player__btn-shuffle _btn-icon">
      <svg className="player__btn-shuffle-svg" alt="shuffle">
        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>
  );
};

export const TrackPlayImage = () => {
  return (
    <div className="track-play__image">
      <svg className="track-play__svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
};

export function TrackPlayAuthor() {
  return (
    <div className="track-play__author">
      <a className="track-play__author-link" href="http://">
        Ты та...
      </a>
    </div>
  );
}

export function TrackPlayAlbum() {
  return (
    <div className="track-play__album">
      <a className="track-play__album-link" href="http://">
        Баста
      </a>
    </div>
  );
}

export function TrackPlayLike() {
  return (
    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg" alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg" alt="dislike">
          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
        </svg>
      </div>
    </div>
  );
}
