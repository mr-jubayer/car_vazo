import { collectionNames, connectDB } from "@/lib/connectDB";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const loginUser = async (payload) => {
  const { email, password } = payload;

  await connectDB();

  const db = mongoose.connection.db;
  const collection = db.collection(collectionNames.users);
  const user = await collection.findOne({ email });

  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);

  if (!isPasswordOk) return null;

  return user;
};

export { loginUser };
