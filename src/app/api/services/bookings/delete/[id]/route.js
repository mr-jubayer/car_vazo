import { connectDB } from "@/lib/connectDB";
import { Booking } from "@/models/booking.model";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const DELETE = async (req, { params }) => {
  const { id } = await params;

  await connectDB();
  const result = await Booking.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount) {
    revalidatePath("/my-bookings");
    return NextResponse.json({ success: true, message: "Deleted successful" });
  }
  return NextResponse.json({ success: false, message: "forbidden" });
};

export { DELETE };
