import { tracks } from "../../utils/tracks";
import { Track } from "../trackList/TrackList";
import "./centerblock.css";

function ContentTitle() {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  );
}

export function Centerblock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <ContentTitle />
        <div className="content__playlist playlist">
          {tracks.map((track) => (
            <Track
              key={track.id}
              title={track.name}
              author={track.author}
              album={track.album}
              time={track.duration_in_seconds}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
