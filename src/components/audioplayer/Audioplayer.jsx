import {
  Next,
  Pause,
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
import { getTracks } from "../../api";

export const Audioplayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   const audioElement = audioRef.current;
  //   audioElement.src = currentTrack.treck_file;
  //   if (isPlaying) {
  //     audioRef.current.play();
  //   }
  //   audioElement.src = getTracks[currentTrackIndex].treck_file;
  // }, [isPlaying, currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const togglePause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % getTracks.length;
    setCurrentTrackIndex(nextTrackIndex);
  };

  const playPrevTrack = () => {
    const prevTrackIndex =
      (currentTrackIndex - 1 + getTracks.length) % getTracks.length;
    setCurrentTrackIndex(prevTrackIndex);
  };

  return (
    <div className={stiles.bar}>
      <div className={stiles.barContent}>
        <div className={stiles.barPlayerProgress}></div>
        <div className={stiles.barPlayerBlock}>
          <div className={stiles.barPlayer}>
            <div className={stiles.playerControls}>
              <Prev onClick={playPrevTrack} />
              <Play onClick={togglePlay} />
              <Pause onClick={togglePause} />
              <Next onClick={playNextTrack} />
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
