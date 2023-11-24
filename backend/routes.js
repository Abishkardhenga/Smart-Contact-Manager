const { Register, Login } = require("./controllers/Auth");
const {
  GetContact,
  CreateDetail,
  DeleteUser,
  UpdateUser,
} = require("./controllers/user");

const routes = require("express").Router();

routes.get("/userdetail", GetContact);
routes.post("/createuser", CreateDetail);
routes.post("/register", Register);
routes.post("/login", Login);
routes.delete("/deleteuser/:id", DeleteUser);
routes.patch("/edituser/:id", UpdateUser);

module.exports = routes;
