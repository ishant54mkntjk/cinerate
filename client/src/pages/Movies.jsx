import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
import request from "../api";
import "./Movies.css";

export default function Movies() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [genre, setGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request("/movies")
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  const genres = useMemo(() => ["All", ...new Set(movies.map((m) => m.genre))], [movies]);

  const filtered = useMemo(() => {
    return movies.filter((m) => {
      const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase());
      const matchesGenre = genre === "All" || m.genre === genre;
      return matchesQuery && matchesGenre;
    });
  }, [movies, query, genre]);

  return (
    <div className="container movies-page">
      <h1 className="section-title">All Movies</h1>

      <div className="movies-controls">
        <input
          type="text"
          className="movies-search"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="genre-filter">
          {genres.map((g) => (
            <button
              key={g}
              className={`genre-chip ${genre === g ? "active" : ""}`}
              onClick={() => setGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {loading ? <p>Loading...</p> : <MovieGrid movies={filtered} />}
    </div>
  );
}
