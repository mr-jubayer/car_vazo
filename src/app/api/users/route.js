import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const { connectDB } = require("@/lib/connectDB");

const POST = async (req) => {
  const user = await req.json();
  await connectDB();

  user.password = await bcrypt.hash(user.password, 10);

  const result = await User.insertOne(user);

  return NextResponse.json(result);
};

export { POST };
