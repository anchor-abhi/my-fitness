const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://abhi:abhi_123@cluster0.en9rsrt.mongodb.net/fitness-app-backend"
  );
};
