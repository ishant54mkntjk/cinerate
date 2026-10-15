import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import "./Hero.css";

export default function Hero({ movie }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="hero-scrim" />
      <div className="container hero-content">
        <span className="hero-eyebrow">Featured Tonight</span>
        <h1>{movie.title}</h1>
        <div className="hero-meta">
          <RatingStars rating={movie.rating} />
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
          <span>{movie.runtime}</span>
        </div>
        <p className="hero-description">{movie.description}</p>
        <div className="hero-actions">
          <Link to={`/movies/${movie._id}`} className="btn btn-primary">
            View Details
          </Link>
          <Link to="/movies" className="btn btn-ghost">
            Browse All
          </Link>
        </div>
      </div>
    </section>
  );
}
