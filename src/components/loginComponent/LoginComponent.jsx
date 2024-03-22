import { useEffect, useState } from "react";
import styles from "./LoginComponent.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { todoLogin, todoSignup } from "../../api";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await todoLogin({ email, password });
      if (response.ok) {
        navigate("/");
      } else {
        alert("Неверные учетные данные");
      }
    } catch (error) {
      setError(
        "Не удалось войти. Пожалуйста, проверьте правильность введенных данных."
      );
    }
  };

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
          </div>
          <button
            className={styles.loginButton}
            onClick={() => handleLogin({ email, password })}
          >
            Войти
          </button>
          <Link className={styles.loginLink} to={"/registr"}>
            Зарегистрироваться
          </Link>
        </>
      </div>
    </div>
  );
};
