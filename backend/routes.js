const { Register, Login } = require("./controllers/Auth");
const { GetContact, CreateDetail } = require("./controllers/Contact");

const routes = require("express").Router();

routes.get("/userdetail", GetContact);
routes.post("/createuserdetail", CreateDetail);
routes.post("/register", Register);
routes.post("/login", Login);

module.exports = routes;
