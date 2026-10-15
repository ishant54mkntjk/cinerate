import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(query.trim() ? `/movies?q=${encodeURIComponent(query.trim())}` : "/movies");
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          Cine<span>Rate</span>
        </Link>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">⌕</button>
        </form>

        <nav className="navbar-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
          {user ? (
            <>
              <span className="navbar-user">Hi, {user.name.split(" ")[0]}</span>
              <button className="navbar-logout" onClick={() => { logout(); navigate("/"); }}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Log In</NavLink>
              <Link to="/register" className="navbar-signup">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
