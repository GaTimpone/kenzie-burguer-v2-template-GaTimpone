import { Navigate, Outlet } from "react-router-dom";

const OutletRoute = () => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />;
};

export default OutletRoute;
