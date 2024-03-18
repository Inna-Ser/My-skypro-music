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
import { TrackTime } from "./trackTime/TrackTime.jsx";
import styles from "./Audioplayer.module.css";
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "./progressbar/Progressbar.jsx";

export const Audioplayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      togglePlay();
    }
  }, [currentTrack]);

  const togglePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };
    audioRef.current.addEventListener("ended", handleEnded);
  }, [audioRef]);

  const playNextTrack = () => {
    alert("логика еще не написана");
  };

  const playPrevTrack = () => {
    alert("логика еще не написана");
  };

  const playRepeatTrack = () => {
    audioRef.current.loop = !isLoop;
    setIsLoop((prev) => !prev);
  };

  const playShuffleTrack = () => {
    alert("логика еще не написана");
  };

  return (
    <>
      <audio
        className={styles.audioControler}
        controls
        ref={audioRef}
        src={currentTrack.track_file}
      />
      <div className={styles.bar}>
        <TrackTime audioRef={audioRef}></TrackTime>
        <div className={styles.barContent}>
          <ProgressBar audioRef={audioRef}></ProgressBar>
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <div className={styles.playerControls}>
                <Prev playPrevTrack={playPrevTrack} onClick={playPrevTrack} />
                {isPlaying ? (
                  <Pause togglePause={togglePause} />
                ) : (
                  <Play togglePlay={togglePlay} />
                )}
                <Next playNextTrack={playNextTrack} />
                <Repeat playRepeatTrack={playRepeatTrack} isActive={isLoop} />
                <Shuffle playShuffleTrack={playShuffleTrack} />
              </div>
              <TrackPlayImage />
              <div className={styles.playerTrackPlay}>
                <div className={styles.trackPlayContain}>
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
