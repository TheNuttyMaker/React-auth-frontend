import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./useUser";

export const PrivateRoute = () => {
  const user = useUser();
  console.log(user);
  if (!user) {
    console.log("User isn't logged in");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
