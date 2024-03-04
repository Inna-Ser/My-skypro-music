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
} from "../audioplayerComponents/AudioplayerComponents";
import { VolumeBlock } from "../volumeBlock/VolumeBlock";
import stiles from "./Audioplayer.module.css";

export const Audioplayer = () => {
  return (
    <div className={stiles.bar}>
      <div className={stiles.barContent}>
        <div className={stiles.barPlayerProgress}></div>
        <div className={stiles.barPlayerBlock}>
          <div className={stiles.barPlayer}>
            <div className={stiles.playerControls}>
              <Prev />
              <Play />
              <Next />
              <Repeat />
              <Shuffle />
            </div>
            <TrackPlayImage />
            <div className={stiles.playerTrackPlay}>
              <div className={stiles.trackPlayContain}>
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
};
