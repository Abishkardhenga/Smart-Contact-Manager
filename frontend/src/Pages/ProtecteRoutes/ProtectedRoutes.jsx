import React, { useContext } from "react";
import { UserInfo } from "../../utilis/UseContext/Usecontext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { state } = useContext(UserInfo);

  return <>{state.userdata ? <Outlet /> : <Navigate to={"/login"} />} </>;
};

export default ProtectedRoutes;
