import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: false },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
