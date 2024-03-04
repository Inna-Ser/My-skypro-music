import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { MyPlayList } from "./pages/AppPlayList";
import { NotFound } from "./pages";
import { Category } from "./pages/Category";
import { ProtectRoute } from "./components/protectedRoute/ProtectedRoute";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/registr" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectRoute isAlloved={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/playList" element={<MyPlayList />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};
