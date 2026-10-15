import { Router } from "express";
import requireAuth from "../middleware/auth.js";
import User from "../models/User.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const user = await User.findById(req.user._id).populate("watchlist");
  res.json(user.watchlist);
});

router.post("/:movieId", requireAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user.watchlist.includes(req.params.movieId)) {
    user.watchlist.push(req.params.movieId);
    await user.save();
  }
  await user.populate("watchlist");
  res.json(user.watchlist);
});

router.delete("/:movieId", requireAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  user.watchlist = user.watchlist.filter((id) => id.toString() !== req.params.movieId);
  await user.save();
  await user.populate("watchlist");
  res.json(user.watchlist);
});

export default router;
