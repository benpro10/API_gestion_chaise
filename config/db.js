const { default: mongoose } = require("mongoose");

async function connection() {
  try {
    await mongoose.connect(process.env.DB_LOCAL);
    console.log("Data Base connected");
  } catch (error) {
    console.log({ dberror: error });
  }
}

module.exports = connection;
