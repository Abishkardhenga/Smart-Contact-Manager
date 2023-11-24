const owner = require("../models/Contact");

const CreateDetail = async (req, res) => {
  try {
    let data = await owner.create(req.body);
    if (!data) {
      res.status(404).json({ message: "fill invalid details", success: false });
    } else {
      return res
        .status(200)
        .json({ message: "user created successfully", data, success: true });
    }
  } catch (err) {
    res
      .status(404)
      .json({ message: "error creating detail", err, success: false });
    console.error("this is err", err);
  }
};
const GetContact = async (req, res) => {
  try {
    let data = await owner.find();

    if (!data) {
      res.status(400).json({ message: "data not found ", success: false });
    } else {
      res.status(200).json({ message: "all user ", data, success: true });
    }
  } catch (err) {
    res.status(403).json({ message: "error created", err, success: false });
  }
};

const DeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await owner.findByIdAndDelete(id);
    if (!data) {
      res.status(404).json({ message: "User not found", success: false });
    } else {
      res
        .status(200)
        .json({ message: "user successfully  deleted ", data, success: true });
    }
  } catch (err) {
    res.status(403).json({ message: "error deleting", err, success: false });
    console.log(err);
  }
};

const UpdateUser = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await owner.findByIdAndUpdate(
      id,
      {
        username: req.body.username,
        image: req.body.image,
        email: req.body.email,
        phone: req.body.phone,
        profession: req.body.profession,
        description: req.body.description,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "user updated successfully", data, success: true });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      message: "error occured while updating user",
      err,
      success: false,
    });
  }
};

module.exports = { GetContact, CreateDetail, DeleteUser, UpdateUser };
