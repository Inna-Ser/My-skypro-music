import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { MyPlayList } from "./pages/myPlayList/AppPlayList";
import { NotFound } from "./pages/notFound";
import { Category } from "./pages/category/Category";
import { ProtectRoute } from "./components/protectedRoute/ProtectedRoute";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectRoute isAlloved={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/playList" element={<MyPlayList />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" elemeht={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
