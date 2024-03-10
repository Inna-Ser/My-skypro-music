import { useEffect } from "react";
import styles from "./LoginComponent.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

export const LoginComponent = ({ setUser }) => {
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

        <button className={styles.loginButton} onClick={handleClick}>
          Войти
        </button>
        <Link className={styles.loginLink} to="/registr">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};
