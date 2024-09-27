import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Children }) => {
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(Children)

  return token ? Children : <Navigate to="/signin" replace={true} />;
};

export default ProtectedRoute;
