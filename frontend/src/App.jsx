import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

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
        <button className="getStartedBtn">Get Started</button>
      </div>
    </div>
  );
};

export default App;
