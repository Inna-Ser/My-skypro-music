import { useEffect, useState } from "react";
// import { getTrack } from "../../api";
import classNames from "classnames";
import styles from "../playList/PlayList.module.css";
import { Track } from "../track/Track";

export const MyPlayListComponent = ({ id, get }) => {
  const [myTrack, setMyTrack] = useState(null);

  // useEffect(() => {
  //   getTrack({ id }).then((track) => {
  //     console.log(track);
  //     setMyTrack(track);
  //   });
  // }, [id]);
  return (
    <div className={classNames(styles.content__playlist, styles.playlist)}>
      {setMyTrack && (
        <Track
          key={setMyTrack.id}
          title={setMyTrack.name}
          author={setMyTrack.author}
          album={setMyTrack.album}
          time={setMyTrack.duration_in_seconds}
        />
      )}
    </div>
  );
};
