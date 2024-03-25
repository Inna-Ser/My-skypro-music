import { Link, useNavigate } from "react-router-dom";
import styles from "../loginComponent/LoginComponent.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { todoSignup } from "../../api";

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Состояние для отслеживания отправки данных

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUserName(value);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      await todoSignup({ email, password, username });
      alert(`Выполняется регистрация: ${email} ${password} ${username}`);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [email, password, username]);

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <Link className={classNames(styles.navLogo, styles.logo)}>
          <img
            className={styles.logoImage}
            src="/img/logo_modal.png"
            alt="logo"
          />
        </Link>
        <>
          <div className={styles.loginBoxInput}>
            <input
              className={styles.loginInput}
              type="text"
              name="email"
              placeholder="Почта"
              value={email}
              onChange={handleInputChange}
            ></input>
            <input
              className={styles.loginInput}
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={handleInputChange}
            ></input>
            <input
              className={styles.loginInput}
              type="text"
              name="username"
              placeholder="Имя пользователя"
              value={username}
              onChange={handleInputChange}
            ></input>
          </div>
          {error && <div className={styles.registrError}>{error}</div>}
          <button
            type={"submit"}
            className={styles.loginButton}
            onClick={handleRegister}
            disabled={isSubmitting}
          >
            Зарегистрироваться
          </button>
          <Link className={styles.loginLink} to={"/login"}>
            Войти
          </Link>
        </>
      </div>
    </div>
  );
};
