# TripBoard

A MERN stack trip-planning app — built as hands-on practice for a Senior Frontend Engineer take-home test (MERN, feature-building + bug-fix).

## Tech Stack

- **MongoDB** (Atlas) — database
- **Express** — backend REST API
- **React** — frontend
- **Node.js** — backend runtime
- **Mongoose** — MongoDB object modeling

## Project Structure

```
tripboard/
  server/          Express + MongoDB backend
    src/
      models/      Mongoose schemas
      routes/      API route definitions
      controllers/ Route handler logic
      middleware/  Custom Express middleware
      server.js    App entry point
  client/          React frontend
```

## Backend Setup

```bash
cd server
npm install
```

Create a `server/.env` file (see `server/.env.example` for the format):

```
PORT=5000
MONGO_URI=<your MongoDB Atlas connection string>
```

Run the dev server:

```bash
npm run dev
```

Health check: `GET http://localhost:5000/api/health`

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Status

Work in progress — backend and frontend being built incrementally.
