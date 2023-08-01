const express = require('express');
const signup = require('../controllers/singup');

module.exports = () => {
  const router = express.Router();
  router.post("/signup", signup);
  return router;
};
