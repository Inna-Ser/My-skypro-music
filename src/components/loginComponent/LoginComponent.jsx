import { useEffect } from "react";
import styles from "./LoginComponent.module.css";
import { Link, useNavigate } from "react-router-dom";

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
      <div className={styles.login__block}>
        <h1 className={styles.login__title}>Страница логина</h1>
        <button onClick={handleClick}>Войти</button>

        <Link className={styles.login__link} to="/registr">
          Перейти к регистрации
        </Link>
      </div>
    </div>
  );
};
