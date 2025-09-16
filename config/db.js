const mongoose = require('mongoose');

const mongoURI = process.env.LOCAL_DATABASE;
console.log(mongoURI);

const connectDB = async () => {
  if (!mongoURI) {
    console.error('MONGODB_URI environment variable is not defined');
    process.exit(1);
  }
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn?.connection?.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
