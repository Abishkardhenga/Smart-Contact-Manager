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
import DashBoard from "./Pages/Dashboard/Dashboard.jsx";
import Adduser from "./Components/Adduser/Adduser.jsx";
import { UserContexProvider } from "./utilis/UseContext/Usecontext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./Pages/ProtecteRoutes/ProtectedRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContexProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="addcontact" element={<Adduser />} />
            <Route path="setting" element={<Setting />} />
            <Route path="viewcontact" element={<Viewcontact />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="/Register" element={<Register />} />
      </Routes>
    </UserContexProvider>
  </BrowserRouter>
);
