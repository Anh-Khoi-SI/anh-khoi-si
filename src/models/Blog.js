import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, required: true },
    subTitle: { type: String, required: true, trim: true },
    banner: { type: String, required: true },
    content: { type: String, required: true },
    categorySlug: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
