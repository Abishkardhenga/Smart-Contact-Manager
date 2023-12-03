import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserInfo } from "./utilis/UseContext/Usecontext";

const App = () => {
  let { state, dispatch } = useContext(UserInfo);

  return (
    <div className="appContainer">
      <Navbar />
      <div className="body">
        {/* <h1 className="heading">Smart Contact Manager</h1> */}

        <Link to={"/dashboard"} className="getStartedBtn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default App;
