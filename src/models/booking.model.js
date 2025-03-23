const { Schema, model, models } = require("mongoose");

const bookingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: new Date().toISOString() },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  amount: { type: Number, required: true },
  serviceImage: { type: String },
  serviceName: { type: String },
});

const Booking = models.bookings || model("bookings", bookingSchema);
export { Booking };
