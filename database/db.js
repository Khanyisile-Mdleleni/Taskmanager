const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/task-master";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("connected  to Database");
  })
  .catch((error) => {
    console.error("Error connecting to Database", error);
  });
