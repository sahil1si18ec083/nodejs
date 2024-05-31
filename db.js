const mongoose = require("mongoose");

const connectToDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected...");
});
db.on("error", () => {
  console.log("Error in connected to db...");
});
db.on("disconnected", () => {
  console.log("db disconnected");
});
module.exports = { connectToDB };
