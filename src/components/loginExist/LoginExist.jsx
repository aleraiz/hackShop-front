import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginExist({ redirectPath = "/" }) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  if (user && Object.keys(user).length !== 0) {
    console.log("existe");
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default LoginExist;
