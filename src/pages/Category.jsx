import { useParams } from "react-router-dom";
import { Navigator } from "../components/navigator/Navigator";
import { categories } from "../utils/categories";

export const Category = () => {
  const params = useParams();
  const category = categories.find(
    (category) => category.id === Number(params.id)
  );
  return (
    <div>
      <Navigator />
      <h1>{category.title}</h1>
    </div>
  );
};
