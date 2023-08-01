const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(3000, async () => {
  await mongoose.connect("mongodb+srv://subiramanigm:mongodbpwd%40122%231@cluster0.xliyllz.mongodb.net/?retryWrites=true&w=majority")
  console.log('connected mongoDB')
  console.log("App running in 3000")
});
