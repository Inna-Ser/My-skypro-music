import { useNavigate } from "react-router-dom";
import styles from "./RegisterComponent.module.css";

export const RegisterComponent = () => {
  const comeBack = useNavigate();
  const handleComeBackClick = () => {
    comeBack("/", { replace: true });
  };
  return (
    <div>
      <button onClick={handleComeBackClick}>Back to pre page</button>
      <h1 className={styles.title__register}>Страница регистрации</h1>
    </div>
  );
};
