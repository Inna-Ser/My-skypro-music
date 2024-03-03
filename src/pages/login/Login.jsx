import { NavLink } from "react-router-dom";
import "./login.css";
import { useState } from "react";

export const Login = () => {
  const [state, setState] = useState("Войти");

  const handleClick = () => {
    setState((prevText) => (prevText === "Войти" ? "Выйти" : "Войти"));
  };

  return (
    <div className="Login">
      <div className="Login__block">
        <h1 className="Login__title">Страница логина</h1>
        <button onClick={handleClick}>{state}</button>

        <NavLink className="login__link" to="/registr">
          Перейти к регистрации
        </NavLink>
      </div>
    </div>
  );
};
