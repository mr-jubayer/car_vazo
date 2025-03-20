const { default: mongoose } = require("mongoose");

const uri = "mongodb://localhost:27017/car-vazo";

const collectionNames = {
  services: "services",
  users: "users",
};

const connectDB = async () => {
  return mongoose.connect(uri);
};

export { connectDB, collectionNames };
