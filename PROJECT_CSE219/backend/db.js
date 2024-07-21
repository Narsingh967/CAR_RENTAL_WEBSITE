const mongoose = require('mongoose')

const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect('mongodb+srv://ns:ns@cluster.wfw9y4h.mongodb.net/rentalService');
      console.log("db connected");
    }
    return
  } catch (error) {
    console.log("======error======",error.message)
    return
  }
};

module.exports = connectMongoDB;
