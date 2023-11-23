const { Register, Login } = require("./controllers/Auth");
const { GetContact, CreateDetail } = require("./controllers/user");

const routes = require("express").Router();

routes.get("/userdetail", GetContact);
routes.post("/createuser", CreateDetail);
routes.post("/register", Register);
routes.post("/login", Login);

module.exports = routes;
