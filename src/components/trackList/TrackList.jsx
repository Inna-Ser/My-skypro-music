import Skeleton from "react-loading-skeleton";
import { TrackAlbum, TrackAuthor, TrackTime, TrackTitle } from "../track/Track";
import "./trackList.css";
import "react-loading-skeleton/dist/skeleton.css";

export function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
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
}
