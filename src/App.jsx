import { useState } from "react";
import { AppRoutes } from "./Routes";
import styles from "./App.module.css";
import "./Global.module.css";
import { UserContext } from "./userContext";

const checkUserInLS = () => {
  // в ковычках ключ
  const user = localStorage.getItem("user");
  return user ? user : null;
};

export const App = () => {
  const [user, setUser] = useState(checkUserInLS());

  const getToken = () => {
    const token = user ? `Bearer ${user.token}` : undefined;
    return token;
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contaner}>
          <UserContext.Provider value={{user, setUser, getToken}}>
          <AppRoutes />
          </UserContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
