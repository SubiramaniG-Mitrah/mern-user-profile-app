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

const restaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    coord: [
      {
        latitude: Number,
        longitude: Number,
      },
    ],
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

const Restaurant = mongoose.model("restaurants", restaurantSchema);

const db = mongoose.connection;

console.log(`122 db`,db);

app.get("/", async (req, res) => {
  // const allRestaurants = await Restaurant.find({}).limit(10);
  const allRestaurants = await db.sample_restaurants.restaurants.find({}).limit(10)
  res.json(allRestaurants);
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Success connection DB");
  } catch (error) {
    console.error(error);
  }
})();

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () =>
  console.log(`Profile app back-end listening on port ${port}!`)
);
