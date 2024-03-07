import { Filter } from "../filterItem/Filter";
import styles from "./Centerblock.module.css";
import { PlayList } from "../playList/PlayList";
import classNames from "classnames";

const ContentTitle = () => {
  return (
    <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>
        Трек
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col02)}>
        ИСПОЛНИТЕЛЬ
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col03)}>
        АЛЬБОМ
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col04)}>
        <svg className={styles.playlistTitleSvg} alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className={classNames(styles.centerblockSearch, styles.search)}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

export const Centerblock = ({ isLoading, getToken, setCurrentTrack }) => {
  return (
    <div className={classNames(styles.mainCenterblock, styles.centerblock)}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter />
      <div className={styles.centerblockContent}>
        <ContentTitle />
        <PlayList isLoading={isLoading} getToken={getToken} setCurrentTrack={setCurrentTrack} />
      </div>
    </div>
  );
};
