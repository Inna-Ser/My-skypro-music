import { useState } from "react";
import { AppRoutes } from "./Routes";
import styles from "./App.module.css";
import "./Global.module.css";
import { UserContext } from "./userContext";
import { ThemeContext, themes } from "./themesComponent/ThemesComponent";

const checkUserInLS = () => {
  // в ковычках ключ
  const user = localStorage.getItem("user");
  return user ? user : null;
};

export const App = () => {
  const [user, setUser] = useState(checkUserInLS());
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const getToken = () => {
    const token = user ? `Bearer ${user.token}` : undefined;
    return token;
  };
  const toggleTheme = (currentTheme) => {
    console.log(currentTheme);
    if (currentTheme.mode === "dark") {
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contaner}>
          <UserContext.Provider
            value={{
              user,
              setUser,
              getToken,
            }}
          >
            <ThemeContext.Provider
              value={{
                theme: currentTheme,
                toggleTheme,
              }}
            >
              <AppRoutes />
            </ThemeContext.Provider>
          </UserContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
