import { createContext, useContext, useEffect, useState } from "react";
import request from "../api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("cinerate_token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    request("/auth/me", { token })
      .then((data) => setUser(data.user))
      .catch(() => {
        setToken(null);
        localStorage.removeItem("cinerate_token");
      })
      .finally(() => setLoading(false));
  }, [token]);

  const persist = (data) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("cinerate_token", data.token);
  };

  const register = async (name, email, password) => {
    const data = await request("/auth/register", { method: "POST", body: { name, email, password } });
    persist(data);
  };

  const login = async (email, password) => {
    const data = await request("/auth/login", { method: "POST", body: { email, password } });
    persist(data);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("cinerate_token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
