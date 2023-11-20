const mongoose = require("mongoose");

const Db = async () => {
  try {
    await mongoose.connect(process.env.mongo_URI);
    console.log(`db connected successfully ${process.env.mongo_URI} `);
  } catch (err) {
    console.log("this is err", err);
  }
};

module.exports = Db;
