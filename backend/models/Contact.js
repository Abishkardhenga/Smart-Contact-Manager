const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      required: false,
    },
    phone: {
      type: Number,
      required: true,
    },

    profession: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
