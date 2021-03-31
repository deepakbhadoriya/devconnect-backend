const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

console.log(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MongoDb Connected...');
  } catch (error) {
    console.error(error.message);
    //exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
