const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    image: {
      type: string,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    nickname: {
      type: String,
      require: true,
    },
    profession: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "owner",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactDetail", ContactSchema);
