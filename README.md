# CineRate — Full Stack

React (Vite) frontend + Node/Express/MongoDB backend with JWT auth.

```
cinerate/
├── client/   React frontend
└── server/   Express API + MongoDB (Mongoose)
```

## 1. Backend setup

```
cd server
npm install
cp .env.example .env
```

Edit `server/.env`:
- `MONGO_URI` — your MongoDB connection string (local `mongodb://127.0.0.1:27017/cinerate` or an Atlas URI)
- `JWT_SECRET` — any long random string

Seed the database with 12 movies + reviews:

```
npm run seed
```

Start the API (http://localhost:5000):

```
npm run dev
```

## 2. Frontend setup

```
cd client
npm install
cp .env.example .env
npm run dev
```

Opens at http://localhost:5173 and talks to the API at `VITE_API_URL` (default `http://localhost:5000/api`).

## What's implemented

- **Auth**: register/login with JWT, `bcryptjs` password hashing, `/api/auth/me` for session restore
- **Movies**: `GET /api/movies` (search `?q=`, filter `?genre=`), `GET /api/movies/:id`
- **Reviews**: `POST /api/movies/:id/reviews` (logged-in users only), movie's average rating recalculates automatically
- **Watchlist**: per-user, stored on the User document — `GET/POST/DELETE /api/watchlist/:movieId`
- **Frontend**: Home/Movies/MovieDetails/Watchlist now fetch live data from the API; Login/Register pages added; Navbar shows logged-in state

## Notes

- Passwords are hashed, JWTs expire in 30 days, protected routes require `Authorization: Bearer <token>`.
- This environment couldn't reach a live MongoDB instance to run an end-to-end test — the code was verified with `node --check` on every server file and a full `vite build` on the client. Run `npm run seed` locally before starting the API for the first time.
