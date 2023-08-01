const { Admin } = require("../models");

module.exports = async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    // const adminModel = new Admin({ firstName, lastName, email, password });
    // // adminModel.watch().on("change", (...rest) => {
    // //   console.log(`122 rest`, rest);
    // // });
    // await adminModel.save();
    const adminModel = await Admin.create(req.body);
    res
      .status(200)
      .json({ success: 1, message: "Created User", data: adminModel });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: 0, message: "Something went wrong!", data: error });
  }
};
