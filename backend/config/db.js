const mongoose = require("mongoose");

const url = process.env.MONGO_URI

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Connect MongoDB: ${conn}`);
  } catch (err) {
    console.error(`Error: ${err}`);
    process.exit();
  }
};

module.exports = connectDB;
