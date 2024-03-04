import { useParams } from "react-router-dom";
import { tracks } from "../../utils/tracks";
import { Track } from "../../components/track/Track";
import { Sidebar } from "../../components/sidebar/Sidebar"

const categoryGenre = {
  1: "classic",
  2: "rock",
  3: "electro",
};
export const Category = ({ isLoading }) => {
  const params = useParams();
  const categoryTracks = tracks.filter(
    (track) => track.genre === categoryGenre[Number(params.id)]
  );
  return (
    <div>
      <main className="main">
        <div className="content__playlist playlist">
          {categoryTracks.map((track) => (
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
        <Sidebar />
      </main>
    </div>
  );
};
