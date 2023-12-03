const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const database = require("./utilis/db");
app.use(express.json());
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "HEAD", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);

database();

app.use(
  session({
    secret: "dhengaasdfsffasdf",
    name: "dhenga.sid",
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(require("./routes"));

app.listen(8000, () => {
  console.log("server started at 8000");
});
