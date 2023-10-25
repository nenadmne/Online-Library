import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

function AdminRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role") === "Administrator";

  const notify = (message) => {
    toast.error(message, { position: "top-right" });
  };

  if (token && role) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    notify("You don't have permission to access this page.");
    return <Navigate to="/" />;
  }
}

export default AdminRoute;
