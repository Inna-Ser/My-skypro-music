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
      <div className={styles.loginBlock}>
        <h1 className={styles.loginTitle}>Страница логина</h1>
        <button className={styles.loginButton} onClick={handleClick}>Войти</button>

        <Link className={styles.loginLink} to="/registr">
          Перейти к регистрации
        </Link>
      </div>
    </div>
  );
};
