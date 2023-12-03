import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../utilis/UseContext/Usecontext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoutes = () => {
  let { state, dispatch } = useContext(UserInfo);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    try {
      const { status, data } = await axios.get(
        "http://localhost:8000/loginuser",
        {
          withCredentials: true,
        }
      );

      if (status === 200) {
        dispatch({ type: "setUserdata", payload: data });
      }
      setLoading(true);
    } catch (error) {
      setLoading(true);
      navigate("/login");
    }
  };

  if (!loading) return <>loading</>;

  return <>{state.userdata ? <Outlet /> : <Navigate to={"/login"} />} </>;
};

export default ProtectedRoutes;
