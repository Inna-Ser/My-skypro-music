import { RegisterComponent } from "../components/registerComponent/RegisterComponent";

export const Register = ({ isLoginMode }) => {
  return <RegisterComponent setUser={isLoginMode} />;
};
