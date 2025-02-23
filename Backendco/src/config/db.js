const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDbURI);

    console.log(`✅ Connected to MongoDB ${conn.connection.host}`);
  } catch (err) {
    console.log("❌ MongoDB connection error:", err.message, err);
    process.exit(1);
  }
};
