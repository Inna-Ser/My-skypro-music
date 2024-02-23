import { useState } from "react";
import { filterYears } from "../../utils/filterYears";
import { tracks } from "../../utils/tracks";
import "./filter.css";

const FilterAuthor = () => {
  return (
    <ul className="filter__type">
      {tracks.map(({ author }) => (
        <li>{author}</li>
      ))}
    </ul>
  );
};

const FilterYear = () => {
  return (
    <ul className="filter__type">
      {filterYears.map(({ year }) => (
        <li>{year}</li>
      ))}
    </ul>
  );
};

const FilterGenre = () => {
  return (
    <ul className="filter__type">
      {tracks.map(({ genre }) => (
        <li>{genre}</li>
      ))}
    </ul>
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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__wrapper">
        <div
          onClick={() => toggleVisibility("author")}
          className="filter__button button-author _btn-text"
        >
          исполнителю
        </div>
        {visible === "author" && <FilterAuthor />}
      </div>
      <div className="filter__wrapper">
        <div
          onClick={() => toggleVisibility("years")}
          className="filter__button button-year _btn-text"
        >
          году выпуска
        </div>
        {visible === "years" && <FilterYear />}
      </div>
      <div className="filter__wrapper">
        <div
          onClick={() => toggleVisibility("genre")}
          className="filter__button button-genre _btn-text"
        >
          жанру
        </div>
        {visible === "genre" && <FilterGenre />}
      </div>
    </div>
  );
};
