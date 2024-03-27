import Skeleton from "react-loading-skeleton";
import {
  TrackAlbum,
  TrackAuthor,
  TrackTime,
  TrackTitle,
} from "../trackComponents/TrackComponents";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./Track.module.css";

export const Track = (props) => {
  // const params = useParams();
  // const track = tracks.find((track) => track.id === Number(params.id));

  return (
    <div onClick={props.setCurrentTrack} className={styles.playlistItem}>
      <div className={classNames(styles.playlistTrack, styles.track)}>
        {props.isLoading ? (
          <Skeleton width={"50px"} height={"50px"} baseColor="grey" />
        ) : (
          <TrackTitle title={props.title} />
        )}
        {props.isLoading ? (
          <Skeleton width={"350px"} height={"20px"} baseColor="grey" />
        ) : (
          <TrackAuthor author={props.author} />
        )}
        {props.isLoading ? (
          <Skeleton width={"305px"} height={"20px"} baseColor="grey" />
        ) : (
          <TrackAlbum album={props.album} />
        )}
        {props.isLoading ? (
          <Skeleton width={"320px"} height={"20px"} baseColor="grey" />
        ) : (
          <TrackTime time={props.time} />
        )}
      </div>
    </div>
  );
};
