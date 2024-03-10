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

  const togglePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
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
              <Prev ref={audioRef} onClick={playPrevTrack} />
              <Play ref={audioRef} onClick={togglePlay} />
              <Pause ref={audioRef} onClick={togglePause} />
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
      <audio controls ref={audioRef} src={currentTrack.track_file} />
    </div>
  );
};

// ReactDOM.render(<Audioplayer />);
