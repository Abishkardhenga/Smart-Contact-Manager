import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./Pages/AddContact/AddContact.jsx";
import Viewcontact from "./Pages/ViewContact/Viewcontact.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/addcontact" element={<AddContact />} />
      <Route path="/user/setting" element={<Setting />} />
      <Route path="/user/viewcontact" element={<Viewcontact />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
