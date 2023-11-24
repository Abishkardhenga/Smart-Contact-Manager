let data = require("../models/Owner");

const UpdateOwner = async (req, res) => {
  const { id } = req.params;
  try {
    let updatedData = await data.findByIdAndUpdate(
      id,
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Owner information updated successfully",
      updatedData,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .json({ message: "Error occured while updating", err, success: false });
  }
};

module.exports = { UpdateOwner };
