function Prev() {
    return (
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>)
  }
  function Next() {
    return(
    <div className="player__btn-next">
      <svg className="player__btn-next-svg" alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>)
  }
  function Repeat() {
    return(
    <div className="player__btn-repeat _btn-icon">
      <svg className="player__btn-repeat-svg" alt="repeat">
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>)
  }
  function Shuffle() {
    return(
    <div className="player__btn-shuffle _btn-icon">
      <svg className="player__btn-shuffle-svg" alt="shuffle">
        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>)
  }
  function TrackPlayImage() {
    return(
    <div className="track-play__image">
      <svg className="track-play__svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>)
  }
  function TrackPlayAuthor() {
    return(
    <div className="track-play__author">
      <a className="track-play__author-link" href="http://">
        Ты та...
      </a>
    </div>)
  }
  function TrackPlayAlbum() {
    return(
    <div className="track-play__album">
      <a className="track-play__album-link" href="http://">
        Баста
      </a>
    </div>)
  }
  function TrackPlayLike() {
    return(
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
    </div>)
  }
  function VolumeBlock() {
    return(
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>)
  }
  export function Audioplayer() {
    return (
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                <Prev />
                <Next />
                <Repeat />
                <Shuffle />
              </div>
              <TrackPlayImage />
              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <TrackPlayAuthor />
                </div>
                <TrackPlayAlbum />
                <TrackPlayLike />
              </div>
            </div>
            <VolumeBlock />
          </div>
        </div>
      </div>
    );
  }