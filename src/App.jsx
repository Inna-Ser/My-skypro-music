import "./App.css";
import { Contaner, Wrapper } from "./App.styled";
import { GlobalStyles } from "./Global.styled";
import { AppRoutes } from "./Routes";

export const App = ({ users }) => {

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Contaner>
          <AppRoutes />
        </Contaner>
      </Wrapper>
    </>
  );
};

export default App;
