import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserInfo } from "./UseContext/Usecontext";

const App = () => {
  let { state, dispatch } = useContext(UserInfo);
  console.log("this is state from useContext ", state);

  return (
    <div className="appContainer">
      <Navbar />
      <div className="body">
        <h1 className="heading">Smart Contact Manager</h1>
        <p className="description">
          Start Collecting Your Contacts in a smarter way . We Provide very
          efficient and smarter way of handling contacts
        </p>
        <Link to={"/dashboard"} className="getStartedBtn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default App;
