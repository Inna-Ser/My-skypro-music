import { tracks } from "../../utils/tracks";
import { Track } from "../track/Track";
import "./playList.css";
import { useParams } from "react-router-dom";

export const PlayList = ({ isLoading }) => {
  const params = useParams();
  const track = tracks.find((track) => track.id === Number(params.id));
  return (
    <div className="content__playlist playlist">
      {tracks.map((track) => (
        <Track
          isLoading={isLoading}
          key={track.id}
          title={track.name}
          author={track.author}
          album={track.album}
          time={track.duration_in_seconds}
        />
      ))}
    </div>
  );
};
