import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("token");
  return token !== null ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
