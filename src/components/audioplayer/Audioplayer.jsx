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
import { ProgressBar } from "./progressbar/Progressbar.jsx";

export const Audioplayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     if (!isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }
  // }, [isPlaying]);

  const togglePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playNextTrack = () => {};

  const playPrevTrack = () => {
    const prevTrackIndex = currentTrackIndex - 1;
    setCurrentTrackIndex(prevTrackIndex);
    audioRef.current.play();
    setIsPlaying(true);
  };

  const playRepeatTrack = () => {
    audioRef.current.loop = !isLoop;
    setIsLoop((prev) => !prev);
  };

  const playShuffleTrack = () => {};

  return (
    <>
      <audio controls ref={audioRef} src={currentTrack.track_file} />
      <ProgressBar></ProgressBar>

      <div className={stiles.bar}>
        <div className={stiles.barContent}>
          <div className={stiles.barPlayerProgress}></div>
          <div className={stiles.barPlayerBlock}>
            <div className={stiles.barPlayer}>
              <div className={stiles.playerControls}>
                <Prev playPrevTrack={playPrevTrack} />
                {!isPlaying ? (
                  <Play togglePlay={togglePlay} />
                ) : (
                  <Pause togglePause={togglePause} />
                )}
                <Next playNextTrack={playNextTrack} />
                <Repeat playRepeatTrack={playRepeatTrack} isActive={isLoop} />
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
            <VolumeBlock audioRef={audioRef} />
          </div>
        </div>
      </div>
    </>
  );
};
