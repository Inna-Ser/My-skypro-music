import classNames from "classnames";
import { Track } from "./track/Track";
import styles from "./PlayList.module.css";
import apiFunctions from "../../api";
import { useEffect, useState } from "react";
import {
  setCurrentTrack,
  setInitialTracks,
} from "../../store/slices/trackSlice";
import { useDispatch } from "react-redux";

export const PlayList = ({ isLoading }) => {
  const [tracksList, setTracksList] = useState(Array(12));
  const [addTodoError, setAddTodoError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    apiFunctions
      .getTracks()
      .then((tracks) => {
        setTracksList(tracks);
        dispatch(setInitialTracks(tracks));
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          setAddTodoError("Не удалось загрузить треки");
          return;
        }
        setAddTodoError(error.message);
      });
  }, []);

  return (
    <div className={classNames(styles.content__playlist, styles.playlist)}>
      <p style={{ color: "purple" }}>{addTodoError}</p>
      {tracksList.map((track) => (
        <Track
          id={track.id}
          setCurrentTrack={() => dispatch(setCurrentTrack(track))}
          isLoading={isLoading}
          key={track.id}
          title={track.name}
          author={track.author}
          album={track.album}
          time={track.duration_in_seconds}
        />
      ))}
    </div>
  );
};
