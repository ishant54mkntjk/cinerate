import { Router } from "express";
import Movie from "../models/Movie.js";
import Review from "../models/Review.js";
import requireAuth from "../middleware/auth.js";

const router = Router();

// GET /api/movies?q=&genre=
router.get("/", async (req, res) => {
  try {
    const { q, genre } = req.query;
    const filter = {};
    if (q) filter.title = { $regex: q, $options: "i" };
    if (genre && genre !== "All") filter.genre = genre;
    const movies = await Movie.find(filter).sort({ createdAt: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/movies/:id  (includes reviews)
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    const reviews = await Review.find({ movie: movie._id }).sort({ createdAt: -1 });
    res.json({ ...movie.toObject(), reviews });
  } catch (err) {
    res.status(404).json({ message: "Movie not found" });
  }
});

// POST /api/movies/:id/reviews  (protected)
router.post("/:id/reviews", requireAuth, async (req, res) => {
  try {
    const { rating, text } = req.body;
    if (!rating || !text) return res.status(400).json({ message: "Rating and text are required" });

    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    const review = await Review.create({
      movie: movie._id,
      user: req.user._id,
      userName: req.user.name,
      rating,
      text,
    });

    const allReviews = await Review.find({ movie: movie._id });
    movie.rating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
    await movie.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
