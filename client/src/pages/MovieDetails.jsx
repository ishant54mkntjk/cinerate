import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../components/RatingStars";
import ReviewCard from "../components/ReviewCard";
import request from "../api";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const { user, token } = useAuth();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviewRating, setReviewRating] = useState(8);
  const [reviewText, setReviewText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    request(`/movies/${id}`)
      .then(setMovie)
      .catch(() => setMovie(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const review = await request(`/movies/${id}/reviews`, {
        method: "POST",
        token,
        body: { rating: Number(reviewRating), text: reviewText },
      });
      setMovie((m) => ({ ...m, reviews: [review, ...m.reviews] }));
      setReviewText("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="container" style={{ padding: "80px 0" }}>Loading...</div>;

  if (!movie) {
    return (
      <div className="container details-notfound">
        <p>Movie not found.</p>
        <Link to="/movies" className="btn btn-primary">Back to Movies</Link>
      </div>
    );
  }

  const saved = isInWatchlist(movie._id);

  return (
    <div>
      <div className="details-backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }}>
        <div className="details-scrim" />
      </div>

      <div className="container details-content">
        <div className="details-poster">
          <img src={movie.poster} alt={movie.title} />
        </div>

        <div className="details-info">
          <h1>{movie.title}</h1>
          <div className="details-meta">
            <RatingStars rating={movie.rating} />
            <span>{movie.year}</span>
            <span>{movie.genre}</span>
            <span>{movie.runtime}</span>
          </div>
          <p className="details-description">{movie.description}</p>
          <div className="details-actions">
            {user ? (
              <button
                className={`btn ${saved ? "btn-ghost" : "btn-primary"}`}
                onClick={() => (saved ? removeFromWatchlist(movie._id) : addToWatchlist(movie))}
              >
                {saved ? "✓ In Watchlist" : "+ Add to Watchlist"}
              </button>
            ) : (
              <Link to="/login" state={{ from: `/movies/${movie._id}` }} className="btn btn-primary">
                Log in to save
              </Link>
            )}
            <button className="btn btn-ghost">▶ Watch Trailer</button>
          </div>
        </div>
      </div>

      <div className="container details-reviews">
        <h2 className="section-title">Reviews</h2>

        {user ? (
          <form className="review-form" onSubmit={handleReviewSubmit}>
            {error && <div className="auth-error">{error}</div>}
            <div className="review-form-row">
              <label htmlFor="rating">Rating</label>
              <input
                id="rating"
                type="number"
                min={1}
                max={10}
                value={reviewRating}
                onChange={(e) => setReviewRating(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Share your thoughts on this movie..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? "Posting..." : "Post Review"}
            </button>
          </form>
        ) : (
          <p className="review-login-hint">
            <Link to="/login" state={{ from: `/movies/${movie._id}` }}>Log in</Link> to write a review.
          </p>
        )}

        <div className="review-list">
          {movie.reviews.map((review) => (
            <ReviewCard key={review._id || `${review.userName}-${review.text.slice(0, 8)}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
