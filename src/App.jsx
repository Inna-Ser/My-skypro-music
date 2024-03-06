import { useState } from "react";
import { AppRoutes } from "./Routes";
import styles from "./App.module.css";
import "./Global.module.css";

const checkUserInLS = () => {
  // в ковычках ключ
  const user = localStorage.getItem("user");
  return user ? user : null;
};
export const App = () => {
  const [user, setUser] = useState(checkUserInLS());

  return (
    <>
      {/* <GlobalStyles /> */}
      <div className={styles.wrapper}>
        <div className={styles.contaner}>
          <AppRoutes user={user} setUser={setUser} />
        </div>
      </div>
    </>
  );
};

export default App;
