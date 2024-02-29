import { Navigation } from "../../components/navigator/Navigator";
import { PlayList } from "../../components/playList/PlayList";

export const MyPlayList = ({ isLoading }) => {
  return (
    <div>
      <Navigation />
      <PlayList isLoading={isLoading} />
    </div>
  );
};
