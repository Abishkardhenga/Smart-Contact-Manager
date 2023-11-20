const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const database = require("./utilis/db");
app.use(express.json());
app.use(require("./routes"));
database();

app.listen(8000, () => {
  console.log("server started at 8000");
});
