import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ redirectPath = "/login" }) {
  const user = useSelector((state) => state.user.user);
  const token = user.token;
  if (!token) {
    alert("credenciales invalidas");
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
