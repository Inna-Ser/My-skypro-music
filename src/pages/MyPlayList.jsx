import { MyPlayListComponent } from "../components/myPlayListComponent/MyPlayListComponent";
import { Navigator } from "../components/navigator/Navigator";
import { PlayList } from "../components/playList/PlayList";

export const MyPlayList = ({ isLoading }) => {
  return (
    <div>
      <MyPlayListComponent isLoading={isLoading} />
    </div>
  );
};
