import { MyPlayListComponent } from "../components/myPlayListComponent/MyPlayListComponent";

export const MyPlayList = ({ isLoading }) => {
  return (
    <div>
      <MyPlayListComponent isLoading={isLoading} />
    </div>
  );
};
