const authentication = require("./authentication.route");

module.exports = (app) => {
  app.use("/auth", authentication());
};
