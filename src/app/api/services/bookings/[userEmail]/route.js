import { connectDB } from "@/lib/connectDB";
import { Booking } from "@/models/booking.model";
import { NextResponse } from "next/server";

const GET = async (req, { params }) => {
  const { userEmail } = await params;

  await connectDB();

  const userBookings = await Booking.find({ email: userEmail });

  return NextResponse.json(userBookings);
};

export { GET };
