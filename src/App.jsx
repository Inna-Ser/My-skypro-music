import { useState } from "react";
import "./App.css";
import { Contaner, Wrapper } from "./App.styled";
import { GlobalStyles } from "./Global.styled";
import { AppRoutes } from "./Routes";

const checkUserInLS = () => {
  // в ковычках ключ
  const user = localStorage.getItem("user")
  return user? user : null;
}
export const App = () => {
  const [user, setUser] = useState(checkUserInLS());

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Contaner>
          <AppRoutes user={user} setUser={setUser} />
        </Contaner>
      </Wrapper>
    </>
  );
};

export default App;
