const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
