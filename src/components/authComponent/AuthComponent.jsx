import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoLogin, todoSignup } from "../../api";
import { RegisterComponent } from "../registerComponent/RegisterComponent";
import { LoginComponent } from "../loginComponent/LoginComponent";

export const AuthComponent = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const navigate = useNavigate();

  return (
    <>
        {isLoginMode ? <LoginComponent /> : <RegisterComponent />}
    </>
  )
};
