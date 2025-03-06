import mongoose from "mongoose";

const BlogCategorySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  parent: { type: String, default: null },
});

export default mongoose.models.BlogCategory ||
  mongoose.model("BlogCategory", BlogCategorySchema);
