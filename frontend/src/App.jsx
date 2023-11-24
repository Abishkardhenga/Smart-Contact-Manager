import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="body">
        <h1 className="heading">Smart Contact Manager</h1>
        <p className="description">
          Start Collecting Your Contacts in a smarter way . We Provide very
          efficient and smarter way of handling contacts
        </p>
        <Link to={"/user/addcontact"} className="getStartedBtn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default App;
