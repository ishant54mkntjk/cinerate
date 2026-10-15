import MovieCard from "./MovieCard";
import "./MovieGrid.css";

export default function MovieGrid({ movies }) {
  if (!movies.length) {
    return <p className="movie-grid-empty">No movies found.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
