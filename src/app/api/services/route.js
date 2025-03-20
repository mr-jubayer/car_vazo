import { connectDB, collectionNames } from "@/lib/connectDB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    await connectDB();

    const db = mongoose.connection.db;
    const collection = db.collection(collectionNames.services);

    const services = await collection.find({}).toArray();

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data", status: 500 });
  }
}
