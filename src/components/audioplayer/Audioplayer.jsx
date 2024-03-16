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
  const [duration, setDuration] = useState(0);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     if (!isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }
  // }, [isPlaying]);

  useEffect(() => {
    audioRef.current.duration
      ? setDuration(audioRef.current.duration)
      : setDuration(0);
  });

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
      <audio
        className={stiles.audioControler}
        controls
        ref={audioRef}
        src={currentTrack.track_file}
      />
      <div className={stiles.bar}>
        <ProgressBar audioRef={audioRef} duration={duration}></ProgressBar>
        <div className={stiles.barContent}>
          <div className={stiles.barPlayerProgress}></div>
          <div className={stiles.barPlayerBlock}>
            <div className={stiles.barPlayer}>
              <div className={stiles.playerControls}>
                <Prev playPrevTrack={playPrevTrack} />
                {isPlaying ? (
                  <Pause togglePause={togglePause} />
                ) : (
                  <Play togglePlay={togglePlay} />
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
