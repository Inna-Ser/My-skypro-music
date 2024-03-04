import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = ({ redirectPatch = "/", isAlloved }) => {
  if (!isAlloved) {
    <Navigate to={redirectPatch} replace={true} />;
  }
  return <Outlet />;
};
