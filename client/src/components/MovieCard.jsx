import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie._id}`} className="movie-card">
      <div className="movie-card-poster">
        <img src={movie.poster} alt={movie.title} loading="lazy" />
        <div className="movie-card-rating">
          <RatingStars rating={movie.rating} />
        </div>
      </div>
      <div className="movie-card-body">
        <h3>{movie.title}</h3>
        <p className="movie-card-meta">
          {movie.year} &middot; {movie.genre}
        </p>
      </div>
    </Link>
  );
}
