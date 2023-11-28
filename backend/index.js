const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const database = require("./utilis/db");
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "HEAD", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(require("./routes"));
database();

app.listen(8000, () => {
  console.log("server started at 8000");
});
