const { Register, Login, Logout, GetLoginUser } = require("./controllers/Auth");
const { UpdateOwner } = require("./controllers/owner");
const {
  GetContact,
  GetContactbyId,
  CreateDetail,
  DeleteUser,
  SearchbyName,
  UpdateUser,
} = require("./controllers/user");

const routes = require("express").Router();

routes.get("/userdetail", GetContact);
routes.get("/userdetail/:id", GetContactbyId);
routes.post("/createuser", CreateDetail);
routes.post("/register", Register);
routes.post("/login", Login);
routes.delete("/deleteuser/:id", DeleteUser);
routes.patch("/edituser/:id", UpdateUser);
routes.patch("/updateowner/:id", UpdateOwner);
routes.get("/search/:username", SearchbyName);
routes.get("/loginUser", GetLoginUser);
routes.post("/logout", Logout);
module.exports = routes;
