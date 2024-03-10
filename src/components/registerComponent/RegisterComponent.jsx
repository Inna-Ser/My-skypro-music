import { useNavigate } from "react-router-dom";
import styles from "../loginComponent/LoginComponent.module.css";
import classNames from "classnames";
import { useEffect } from "react";

export const RegisterComponent = ({ setUser }) => {
  const comeBack = useNavigate();
  const handleComeBackClick = () => {
    comeBack("/login", { replace: true });
  };
  const navigate = useNavigate();

  const handleClick = () => {
    setUser("token");
    localStorage.setItem("user", "token");
    navigate("/");
  };

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <div className={classNames(styles.navLogo, styles.logo)}>
          <img
            className={styles.logoImage}
            src="/img/logo_modal.png"
            alt="logo"
          />
        </div>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Почта"
        ></input>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Пароль"
        ></input>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Повторите пароль"
        ></input>
        <button className={styles.loginButton} onClick={handleClick}>
          Зарегистрироваться
        </button>
      </div>
      <button onClick={handleComeBackClick}>Back to login</button>
    </div>
  );
};
