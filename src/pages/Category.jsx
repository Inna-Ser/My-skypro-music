import { useParams } from "react-router-dom";
import { Navigator } from "../components/navigator/Navigator";
import { categories } from "../utils/categories";

// const categoryGenre = {
//   1: "Плейлист дня",
//   2: "100 танцевальных хитов",
//   3: "Инди-заряд",
// };
export const Category = () => {
  const params = useParams();
  const category = categories.find(
    (category) => category.id === Number(params.id)
  );
  // const categoryTracks = tracks.filter(
  //   (track) => track.genre === categoryGenre[Number(params.id)]
  // );
  return (
    <div>
      <Navigator />
      <h1>{category.title}</h1>
    </div>
  );
};
