import { Link } from "react-router-dom";
import RatingStars from "../components/RatingStars";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";
import "./Watchlist.css";

export default function Watchlist() {
  const { user } = useAuth();
  const { watchlist, removeFromWatchlist } = useWatchlist();

  if (!user) {
    return (
      <div className="container watchlist-page">
        <h1 className="section-title">My Watchlist</h1>
        <div className="watchlist-empty">
          <p>Log in to build and view your watchlist.</p>
          <Link to="/login" state={{ from: "/watchlist" }} className="btn btn-primary">Log In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container watchlist-page">
      <h1 className="section-title">My Watchlist</h1>

      {watchlist.length === 0 ? (
        <div className="watchlist-empty">
          <p>Your watchlist is empty.</p>
          <Link to="/movies" className="btn btn-primary">Browse Movies</Link>
        </div>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <div className="watchlist-card" key={movie._id}>
              <Link to={`/movies/${movie._id}`}>
                <img src={movie.poster} alt={movie.title} />
              </Link>
              <div className="watchlist-card-body">
                <Link to={`/movies/${movie._id}`}>
                  <h3>{movie.title}</h3>
                </Link>
                <div className="watchlist-card-meta">
                  <RatingStars rating={movie.rating} />
                  <span>{movie.year}</span>
                </div>
                <button className="btn btn-ghost remove-btn" onClick={() => removeFromWatchlist(movie._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
