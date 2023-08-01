const mongoose = require("mongoose");
const adminSchema = require("./admin.schema");

const Admin = mongoose.model("admin", adminSchema);

module.exports = { Admin };
