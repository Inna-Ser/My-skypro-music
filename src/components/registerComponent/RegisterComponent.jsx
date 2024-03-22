import { Link, useNavigate } from "react-router-dom";
import styles from "../loginComponent/LoginComponent.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { todoSignup } from "../../api";

export const RegisterComponent = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "repeatPassword") {
      setRepeatPassword(value);
    }
  };

  const handleRegister = async () => {
    try {
      await todoSignup({ email, password, repeatPassword });
      alert(`Выполняется регистрация: ${email} ${password}`);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [email, password, repeatPassword]);

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
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={handleInputChange}
            ></input>
          </div>
          {error && <div>{error}</div>}
          <button className={styles.loginButton} onClick={handleRegister}>
            Зарегистрироваться
          </button>
        </>
      </div>
    </div>
  );
};
