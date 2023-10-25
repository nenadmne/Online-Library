import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PrivateRoute() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token !== null) {
    return <Outlet />;
  } else {
    toast.error("Unauthorized access. Redirecting to login.", {
      position: "top-right",
    });
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }
}

export default PrivateRoute;
