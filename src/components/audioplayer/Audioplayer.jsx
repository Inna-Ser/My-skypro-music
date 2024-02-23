import {
  Next,
  Play,
  Prev,
  Repeat,
  Shuffle,
  TrackPlayAlbum,
  TrackPlayAuthor,
  TrackPlayImage,
  TrackPlayLike,
} from "../audioplayerItems/audioplayerItems";
import { VolumeBlock } from "../volumeBlock/VolumeBlock";
import "./audioplayer.css";

export function Audioplayer() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <Prev />
              <Play />
              <Next />
              <Repeat />
              <Shuffle />
            </div>
            <TrackPlayImage />
            <div className="player__track-play track-play">
              <div className="track-play__contain">
                <TrackPlayAuthor />
              </div>
              <TrackPlayAlbum />
              <TrackPlayLike />
            </div>
          </div>
          <VolumeBlock />
        </div>
      </div>
    </div>
  );
}
