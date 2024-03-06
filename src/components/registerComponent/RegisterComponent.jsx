import { Link, useNavigate } from "react-router-dom";
import styles from "../loginComponent/LoginComponent.module.css";

export const RegisterComponent = () => {
  const comeBack = useNavigate();
  const handleComeBackClick = () => {
    comeBack("/login", { replace: true });
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <h1 className={styles.loginTitle}>Страница регистрации</h1>
        <button onClick={handleComeBackClick}>Back to login</button>
      </div>
    </div>
  );
};
