import { Navigator } from "../components/navigator/Navigator";
import { PlayList } from "../components/playList/PlayList";

export const MyPlayList = ({ isLoading }) => {
  return (
    <div>
      <Navigator />
      <PlayList isLoading={isLoading} />
    </div>
  );
};
