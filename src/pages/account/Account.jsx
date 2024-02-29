import { Menu } from "../../components/menu/Menu";

export const Account = ({ user, onAuthButtonClick }) => {
  return (
    <div>
      <Menu />
      <button onClick={onAuthButtonClick}>
        {user ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
