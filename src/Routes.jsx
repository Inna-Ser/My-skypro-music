import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { MyPlayList } from "./pages/myPlayList/AppPlayList";
import { NotFound } from "./pages/notFound";
import { AppEnter } from "./pages/enter/AppEnter";
import { Category } from "./pages/category/Category";
import { Account } from "./pages/account/Account";
import { ProtectRoute } from "./components/protectedRoute/ProtectedRoute";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/playList" element={<MyPlayList />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/enter" element={<AppEnter />} />
      <Route element={<ProtectRoute isAlloved={Boolean(user)} />}>
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
