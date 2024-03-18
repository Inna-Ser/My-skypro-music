import { useState } from "react";
import { filterYears } from "../../utils/filterYears";
import { tracks } from "../../utils/tracks";
import styles from "./Filter.module.css";
import classNames from "classnames";

const FilterAuthor = () => {
  return (
    <ul className={styles.filterListContaner}>
      {tracks.map(({ author }) => (
        <li className={styles.filterListItem}>{author}</li>
      ))}
    </ul>
  );
};

const FilterYear = () => {
  return (
    <ul className={styles.filterListContaner}>
      {filterYears.map(({ year }) => (
        <li className={styles.filterListItem}>{year}</li>
      ))}
    </ul>
  );
};

const FilterGenre = ({ tracks }) => {
  const arrGenre = tracks.map((item) => item.genre);
  const uniqueGenre = [...new Set(arrGenre)];
  return (
    <div className={styles.filterListGenre}>
      <ul className={styles.filterListContaner}>
        {uniqueGenre.map((genre, index) => (
          <li className={styles.filterListItem} key={index}>
            {genre}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Filter = () => {
  const [visible, setVisible] = useState(null);

  const toggleVisibility = (value) => {
    if (value === visible) {
      setVisible(null);
    } else {
      setVisible(value);
    }
  };

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={styles.filterWrapper}>
        <div
          className={
            visible === "author"
              ? classNames(styles.filterButton, styles.active)
              : styles.filterButton
          }
          exact
          onClick={() => toggleVisibility("author")}
        >
          исполнителю
        </div>
        {visible === "author" && <FilterAuthor />}
      </div>
      <div className={styles.filterWrapper}>
        <div
          className={
            visible === "years"
              ? classNames(styles.filterButton, styles.active)
              : styles.filterButton
          }
          onClick={() => toggleVisibility("years")}
        >
          году выпуска
        </div>
        {visible === "years" && <FilterYear />}
      </div>
      <div className={styles.filterWrapper}>
        <div
          className={
            visible === "genre"
              ? classNames(styles.filterButton, styles.active)
              : styles.filterButton
          }
          onClick={() => toggleVisibility("genre")}
        >
          жанру
        </div>
        {visible === "genre" && <FilterGenre tracks={tracks} />}
      </div>
    </div>
  );
};
