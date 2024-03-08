import classNames from "classnames";
// import { tracks } from "../../utils/tracks";
import { Track } from "../track/Track";
import { useParams } from "react-router-dom";
import styles from "./PlayList.module.css";
import { getTracks } from "../../api";
import { useEffect, useState } from "react";
import { tracks } from "../../utils/tracks";

export const PlayList = ({ setCurrentTrack, isLoading }) => {
  const params = useParams();
  const [tracksList, setTracksList] = useState(Array(12));
  const [addTodoError, setAddTodoError] = useState(null);
  useEffect(() => {
    getTracks()
      .then((tracks) => {
        setTracksList(tracks);
      })
      .catch((error) => {
        setAddTodoError(error.message);
      });
  }, []);

  return (
    <div className={classNames(styles.content__playlist, styles.playlist)}>
      <p style={{ color: "red" }}>{addTodoError}</p>
      {tracksList.map((track) => (
        <Track
          setCurrentTrack={() => setCurrentTrack(track)}
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
