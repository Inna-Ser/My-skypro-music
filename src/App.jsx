import { useState } from "react";
import "./App.css";
import { Contaner, Wrapper } from "./App.styled";
import { GlobalStyles } from "./Global.styled";
import { AppRoutes } from "./Routes";
import { MenuList } from "./components/menu/Menu.styled";

export const App = ({ users }) => {
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ login: "" });
  const handleLogout = () => setUser(null);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Contaner>
          <MenuList
            user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}
          />
          <AppRoutes user={user} />
        </Contaner>
      </Wrapper>
    </>
  );
};

export default App;
