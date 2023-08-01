const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
routes(app);
app.get("/", (req, res) => {
  res.send("Profile app back-end running.");
});
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Success connection DB")
  } catch (error) {
    console.error(error);
  }
})();
app.listen(port, () =>
  console.log(`Profile app back-end listening on port ${port}!`)
);
