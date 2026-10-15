import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";
import Review from "./models/Review.js";
import User from "./models/User.js";
import movies from "./seedData.js";

dotenv.config();

async function seed() {
  await connectDB();

  await Review.deleteMany({});
  await Movie.deleteMany({});

  // A system "seed" user so imported reviews satisfy the User reference
  let seedUser = await User.findOne({ email: "reviews@cinerate.app" });
  if (!seedUser) {
    seedUser = await User.create({
      name: "CineRate Reviewer",
      email: "reviews@cinerate.app",
      password: "seed-account-not-for-login",
    });
  }

  for (const m of movies) {
    const { reviews, ...movieFields } = m;
    const movie = await Movie.create(movieFields);

    const createdReviews = await Review.insertMany(
      reviews.map((r) => ({
        movie: movie._id,
        user: seedUser._id,
        userName: r.user,
        rating: r.rating,
        text: r.text,
      }))
    );

    movie.rating = createdReviews.reduce((sum, r) => sum + r.rating, 0) / createdReviews.length;
    await movie.save();
  }

  console.log(`Seeded ${movies.length} movies with reviews.`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
