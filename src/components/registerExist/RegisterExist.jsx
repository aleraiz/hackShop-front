import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RegisterExist({ redirectPath = "/" }) {
  const user = useSelector((state) => state.user.user);
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default RegisterExist;
