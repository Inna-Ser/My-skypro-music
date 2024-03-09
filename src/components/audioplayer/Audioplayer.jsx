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
import { VolumeBlock } from "./volumeBlock/VolumeBlock";
import stiles from "./Audioplayer.module.css";
import { useEffect, useRef, useState } from "react";

export const Audioplayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isPlaying, currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={stiles.bar}>
      <div className={stiles.barContent}>
        <div className={stiles.barPlayerProgress}></div>
        <div className={stiles.barPlayerBlock}>
          <div className={stiles.barPlayer}>
            <div className={stiles.playerControls}>
              <Prev />
              <Play onClick={togglePlay} />
              <Next />
              <Repeat />
              <Shuffle />
            </div>
            <TrackPlayImage />
            <div className={stiles.playerTrackPlay}>
              <div className={stiles.trackPlayContain}>
                <TrackPlayAuthor name={currentTrack.name} />
              </div>
              <TrackPlayAlbum author={currentTrack.author} />
              <TrackPlayLike />
            </div>
          </div>
          <VolumeBlock />
        </div>
      </div>
      <audio ref={audioRef} src={currentTrack.track_file} />
    </div>
  );
};
