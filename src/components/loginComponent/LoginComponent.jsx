import { useContext, useState } from "react";
import styles from "./LoginComponent.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { todoLogin } from "../../api";
import { UserContext } from "../../userContext";

export const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Состояние для отслеживания отправки данных
  const [autocompleteOff, setAutocompleteOff] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setAutocompleteOff(true);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await todoLogin({ email, password });
      if (response.ok) {
        setUser(response);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
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
        <form
          type={"submit"}
          // onSubmit={handleLogin}
          className={styles.loginForm}
        >
          <div className={styles.loginBoxInput}>
            <input
              className={styles.loginInput}
              type="text"
              name="email"
              placeholder="Почта"
              value={email}
              onChange={handleInputChange}
              autoComplete="off"
            ></input>
            <input
              className={styles.loginInput}
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={handleInputChange}
              autoComplete="off"
            ></input>
          </div>
          <button className={styles.loginButton} onClick={handleLogin}>
            Войти
          </button>
          <Link className={styles.loginLink} to={"/registr"}>
            Зарегистрироваться
          </Link>
        </form>
      </div>
    </div>
  );
};
