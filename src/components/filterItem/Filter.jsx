import { useState } from "react";
import { filterYears } from "../../utils/filterYears";
import { tracks } from "../../utils/tracks";
import "./filter.css";
import {
  CenterblockFilter,
  FilterButton,
  FilterListContaner,
  FilterListGenre,
  FilterTitle,
  FilterWrapper,
  FiltrListItem,
} from "./Filtr.styled";

const FilterAuthor = () => {
  return (
    <FilterListContaner>
      {tracks.map(({ author }) => (
        <FiltrListItem>{author}</FiltrListItem>
      ))}
    </FilterListContaner>
  );
};

const FilterYear = () => {
  return (
    <FilterListContaner>
      {filterYears.map(({ year }) => (
        <FiltrListItem>{year}</FiltrListItem>
      ))}
    </FilterListContaner>
  );
};

const FilterGenre = ({ tracks }) => {
  const arrGenre = tracks.map((item) => item.genre);
  const uniqueGenre = [...new Set(arrGenre)];
  return (
    <FilterListGenre>
      <FilterListContaner>
        {uniqueGenre.map((genre, index) => (
          <FiltrListItem key={index}>{genre} </FiltrListItem>
        ))}
      </FilterListContaner>
    </FilterListGenre>
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
    <CenterblockFilter>
      <FilterTitle>Искать по:</FilterTitle>
      <FilterWrapper>
        <FilterButton
          onClick={() => toggleVisibility("author")}
        >
          исполнителю
        </FilterButton>
        {visible === "author" && <FilterAuthor />}
      </FilterWrapper>
      <FilterWrapper>
        <FilterButton
          onClick={() => toggleVisibility("years")}
        >
          году выпуска
        </FilterButton>
        {visible === "years" && <FilterYear />}
      </FilterWrapper>
      <FilterWrapper>
        <FilterButton
          onClick={() => toggleVisibility("genre")}
        >
          жанру
        </FilterButton>
        {visible === "genre" && <FilterGenre tracks={tracks} />}
      </FilterWrapper>
    </CenterblockFilter>
  );
};
