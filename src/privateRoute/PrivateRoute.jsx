import { useContext } from "react";
import { AuthContext } from "../Components/provider/Authprovider";
import { Navigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
