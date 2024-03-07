import classNames from "classnames";
// import { tracks } from "../../utils/tracks";
import { Track } from "../track/Track";
import { useParams } from "react-router-dom";
import styles from "./PlayList.module.css";
import { getTracks } from "../../api";
import { useEffect, useState } from "react";

export const PlayList = ({ setCurrentTrack }) => {
  const params = useParams();
  // const track = tracks.find((track) => track.id === Number(params.id));
  const [tracksList, setTracksList] = useState(Array(12));

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTracks().then((tracks) => {
      setTracksList(tracks);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={classNames(styles.content__playlist, styles.playlist)}>
      {tracksList?.map((track) => (
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
