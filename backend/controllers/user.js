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
    let data = await owner.find({ ...req.query });

    if (!data) {
      res.status(400).json({ message: "data not found ", success: false });
    } else {
      res.status(200).json({ message: "all user ", data, success: true });
    }
  } catch (err) {
    res.status(403).json({ message: "error created", err, success: false });
  }
};

const GetContactbyId = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await owner.findById(id);
    if (!data) {
      res.status(403).json({ message: "No data found", success: false });
    } else {
      res
        .status(200)
        .json({ message: "This is the user", data, success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "error occured", success: false });
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
const SearchbyName = async (req, res) => {
  const { username } = req.params;

  try {
    const data = await owner.find();

    if (data.length === 0) {
      return res.status(404).json({ message: "No data found", success: false });
    }

    const searchedItem = data.filter((item) =>
      item.username.toLowerCase().startsWith(username.toLowerCase())
    );

    if (searchedItem.length === 0) {
      return res.status(404).json({
        message: "No related data found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Successfully found the data",
      searchedItem,
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error occurred", success: false });
  }
};

module.exports = {
  GetContact,
  SearchbyName,
  CreateDetail,
  DeleteUser,
  UpdateUser,
  GetContactbyId,
};
