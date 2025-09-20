import React from "react";
import ProductDetail from "../pages/ProductDetail";
import LogIn from "../pages/LogIn";
import { Navigate } from "react-router";

const PrivateRoute = ({ authenticated }) => {
  return authenticated ? <ProductDetail /> : <Navigate to="/login/" />;
};

export default PrivateRoute;