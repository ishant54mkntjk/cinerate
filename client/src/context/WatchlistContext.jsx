import { createContext, useContext, useEffect, useState } from "react";
import request from "../api";
import { useAuth } from "./AuthContext";

const WatchlistContext = createContext(null);

export function WatchlistProvider({ children }) {
  const { token, user } = useAuth();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (!token || !user) {
      setWatchlist([]);
      return;
    }
    request("/watchlist", { token }).then(setWatchlist).catch(() => setWatchlist([]));
  }, [token, user]);

  const addToWatchlist = async (movie) => {
    const id = movie._id || movie.id;
    const updated = await request(`/watchlist/${id}`, { method: "POST", token });
    setWatchlist(updated);
  };

  const removeFromWatchlist = async (id) => {
    const updated = await request(`/watchlist/${id}`, { method: "DELETE", token });
    setWatchlist(updated);
  };

  const isInWatchlist = (id) => watchlist.some((m) => m._id === id);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export const useWatchlist = () => useContext(WatchlistContext);
