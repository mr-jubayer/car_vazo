import { Schema, model, models } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  provider: { type: String },
  providerAccountId: { type: String },
  createdAt: { type: Date, default: new Date() },
});

const User = models.users || model("users", schema);
export { User };
