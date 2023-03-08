import { Routes, Route } from "react-router-dom";
import OutletRoute from "./OutledRoutes";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route element={<OutletRoute />}>
      <Route path="/shop" element={<ShopPage />} />
    </Route>
  </Routes>
);

export default Router;
