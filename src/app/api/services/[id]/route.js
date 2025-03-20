import { connectDB, collectionNames } from "@/lib/connectDB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

const GET = async (req, { params }) => {
  const { id } = await params;

  await connectDB();
  const db = mongoose.connection.db;
  const collection = db.collection(collectionNames.services);

  const service = await collection.findOne({ _id: new ObjectId(id) });

  return NextResponse.json(service);
};

export { GET };
