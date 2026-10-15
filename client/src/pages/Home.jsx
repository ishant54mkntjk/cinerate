import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieGrid from "../components/MovieGrid";
import request from "../api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request("/movies")
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container" style={{ padding: "80px 0" }}>Loading...</div>;
  if (!movies.length) return <div className="container" style={{ padding: "80px 0" }}>No movies yet. Run the seed script on the server.</div>;

  const featured = movies[0];
  const trending = [...movies].slice(0, 6);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <>
      <Hero movie={featured} />
      <div className="container" style={{ paddingTop: 56, paddingBottom: 20 }}>
        <h2 className="section-title">Trending Movies</h2>
        <MovieGrid movies={trending} />

        <div style={{ height: 56 }} />

        <h2 className="section-title">Top Rated</h2>
        <MovieGrid movies={topRated} />
      </div>
    </>
  );
}
