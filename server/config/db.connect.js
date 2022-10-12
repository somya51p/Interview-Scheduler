const mongoose = require("mongoose");
const constants = require("./constant");
const importData = require("../seeder");

const initializeDBConnection = () => {
  mongoose
    // eslint-disable-next-line no-undef
    .connect(constants.db.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      importData()
      console.log("Connected To Database!")
    })
    .catch((error) => console.error("Connection To Database failed.", error));
};

module.exports = initializeDBConnection;
