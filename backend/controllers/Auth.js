const owner = require("../models/Owner");
const Register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      res.status(403).json({ message: "enter all the fields", status: false });
    } else {
      let data = await owner.create(req.body);
      res
        .status(200)
        .json({ message: "user created Successfully ", data, status: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error  ", err, status: false });
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let data = await owner.findOne({ email });
    console.log("thi is data", data);
    if (!data) {
      res
        .status(403)
        .json({ message: "This Email is not registered ", status: false });
    } else if (data.password !== password) {
      res.status(403).json({ message: "password is invalid ", status: false });
    } else {
      req.session.user = data;
      res
        .status(200)
        .json({ message: "successfully loginnned", data, status: true });
    }
  } catch (err) {
    res.status(500).json({ message: "Error occured", err, status: false });
  }
};

const GetLoginUser = async (req, res) => {
  try {
    let data = req.session.user;
    console.log(req.session);

    if (data) {
      res.status(200).json({ message: data, status: true });
    } else {
      res.status(500).json({
        message: "Login session been expired try to login agian",
        status: false,
      });
    }
  } catch (err) {
    res.status(403).json({ message: "Error occured", err, status: false });
  }
};

module.exports = { Register, Login, GetLoginUser };
