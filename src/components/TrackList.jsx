import { TrackAlbum, TrackAuthor, TrackTime, TrackTitle } from "./Track";

export function Track(props) {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <TrackTitle title={props.title} />
          <TrackAuthor author={props.author} />
          <TrackAlbum album={props.album} />
          <TrackTime time={props.time} />
        </div>
      </div>
    );
  }