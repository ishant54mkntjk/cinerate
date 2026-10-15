import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, default: 0 },
    runtime: { type: String, required: true },
    poster: { type: String, required: true },
    backdrop: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
