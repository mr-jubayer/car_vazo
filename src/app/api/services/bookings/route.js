import { Booking } from "@/models/booking.model";
import { NextResponse } from "next/server";

const POST = async (req) => {
  const bookingPayload = await req.json();

  const result = await Booking.insertOne(bookingPayload);

  if (result) {
    return NextResponse.json({ success: true, insertedId: 1 });
  }

  return NextResponse.json({
    success: false,
    insertedId: 0,
    message: "Something Went Wrong!",
  });
};

export { POST };
