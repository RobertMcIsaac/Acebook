# Acebook – MERN Social‑Network Clone

> A full‑stack Facebook‑style social network built using MongoDB, Express, React and Node.js.  Created as part of the Makers Academy bootcamp, the project was delivered by a small team who inherited a legacy MERN template and were asked to extend it with new features while learning the stack on the fly.

![Node](https://img.shields.io/badge/Node.js-20.x-brightgreen)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)
![Tests](https://img.shields.io/badge/Tested%20with-Jest%20%26%20Vitest-green)
![Status](https://img.shields.io/badge/Status-In%20progress-yellow)

---

## ✅ Features

Our team iterated on a legacy codebase and delivered an end‑to‑end social network with the following core capabilities:

- **User accounts:** Visitors can sign‑up with a username, email and password, log in/out, and edit their profile information (username, email, avatar). Client‑side validation encourages strong passwords.
- **Posts & likes:** Authenticated users can create text posts. Each post stores a timestamp, the author and a `likes` sub‑document with a count and a list of users who liked it.
- **Comments:** Every post has its own comments thread. Comments are stored with references to the post and the author’s username. A simple UI allows users to discuss each post.
- **Photo uploads:** Users can upload profile pictures and share standalone images. Images are uploaded from the client directly to ImgBB using an API key and the returned URL is stored in MongoDB.
- **User directory:** A page lists all registered users. Profiles show display name, email and profile picture, along with the user’s posts.
- **Responsive UI:** Built with React and React‑Bootstrap, the interface adapts to desktop and mobile. Feeds are reverse‑chronological by default, with a toggle to switch order.
- **Testing:** Back‑end routes are covered by Jest and Supertest; the front‑end uses Vitest and React Testing Library to ensure components behave as expected.

---

## 🧱 Tech Stack

| Layer         | Technologies                                    |
|---------------|--------------------------------------------------|
| Frontend      | React 18, Vite, React Router, React‑Bootstrap    |
| Backend       | Node.js 20, Express 4, body‑parser, cors         |
| Database      | MongoDB with Mongoose ODM                        |
| Authentication | JSON Web Tokens via `jsonwebtoken`               |
| Image uploads | ImgBB API (client‑side)                          |
| Testing       | Jest & Supertest (API); Vitest & Testing Library (UI) |

---

## 🏗 Architecture

The application follows a conventional **client/server** split:

- **API:** An Express server exposes RESTful endpoints under `/users`, `/tokens`, `/posts`, `/comments` and `/pictures`.  Controllers encapsulate business logic (e.g. creating a post and updating likes); routers map endpoints to controller methods; and Mongoose models define the shape of each collection.
- **Client:** A React single‑page app communicates with the API over HTTP.  React Router manages page navigation, while service modules centralise calls to each endpoint.  The JWT and basic user data are persisted in `localStorage` to maintain session state.

### Code layout

```text
/api
├── controllers/    # Express controllers (users, posts, comments, pictures)
├── routes/         # Route definitions per resource
├── models/         # Mongoose schemas for Users, Posts, Comments
├── middleware/     # JWT checker middleware
├── lib/            # Helpers (token generation, random strings)
├── db/             # MongoDB connection helper
├── tests/          # Jest/Supertest test suites
├── app.js          # Express app with CORS & error handling
└── index.js        # Entry point – loads env, connects DB, starts server

/frontend/src
├── pages/          # Route pages (Home, Login, Signup, Feed, Profile…)
├── components/     # Reusable UI components (Navbar, Post, Comment…)
├── services/       # API clients (auth, posts, users, comments, pictures)
├── assets/         # Images and static assets
└── App.jsx         # React Router configuration
```

---

## 🔗 Internal Routes

| Method | Route               | Purpose                                        |
|--------|---------------------|------------------------------------------------|
| POST   | `/users`            | Create a new user account                      |
| GET    | `/users`            | List all users (auth required)                 |
| GET    | `/users/me`         | Get the current user’s profile (auth required) |
| PATCH  | `/users/me`         | Update profile picture/email/username (auth required) |
| POST   | `/tokens`           | Authenticate and return a JWT                  |
| GET    | `/posts`            | List all posts with author names (auth required) |
| POST   | `/posts`            | Create a new post (auth required)              |
| PATCH  | `/posts/:post_id`   | Like or unlike a post (auth required)          |
| GET    | `/comments`         | List all comments (auth required)              |
| POST   | `/comments`         | Add a comment to a post (auth required)        |
| GET    | `/pictures`         | List all uploaded pictures (auth required)     |
| POST   | `/pictures`         | Upload a new picture (auth required)           |

---

## 🚀 Getting Started

To run the app locally:

```bash
# Install Node & MongoDB (Node v20+, MongoDB v6+)

# Clone this repo
git clone https://github.com/RobertMcIsaac/acebook-MERNie-Sanders.git
cd acebook-MERNie-Sanders

# Install dependencies for client and server
cd frontend && npm install
cd ../api && npm install

# Create .env files (see below)

# Start your MongoDB instance, then run the API and client:
cd api && npm run dev        # starts the API on :3000
cd ../frontend && npm run dev  # starts the client on :5173 (default Vite port)

# Visit http://localhost:5173 to sign up and log in
```

## Environment variables

Create frontend/.env and api/.env with the following values:
```bash
# frontend/.env
VITE_BACKEND_URL="http://localhost:3000"
VITE_API_KEY=<your_imgbb_api_key>

# api/.env
MONGODB_URL="mongodb://0.0.0.0/acebook"
NODE_ENV="development"
JWT_SECRET=<choose_a_secret>
PORT=3000
```

No secrets are committed to source control; .env files are ignored by git.

## 🧪 Testing

- **API tests:** From `api/` run `npm test`.  Jest and Supertest exercise controllers, verify authentication and ensure protected routes require valid JWTs.
- **Frontend tests:** From `frontend/` run `npm test`.  Vitest and React Testing Library validate component behaviour and integration with services.

---

## 🎯 Design decisions & trade‑offs

- **MERN stack:** JavaScript/TypeScript across the stack simplified context switching and allowed rapid progress.  MongoDB’s flexible schema demanded discipline to avoid data inconsistencies.
- **JWT authentication:** Stateless tokens simplify scaling and future mobile clients.  Tokens expire after 10 minutes; storing them in local storage is simple but not as secure as HttpOnly cookies.
- **External image hosting:** Uploading images directly to ImgBB avoids storing binary data in MongoDB.  The trade‑off is reliance on a third‑party service and managing an API key.
- **Password storage:** The legacy template stored passwords in plain text; our focus was on feature delivery under time constraints.  In production we would hash passwords (e.g. using bcrypt) and enforce stricter password requirements.
- **Learning curve:** Our team had limited experience with MongoDB and React; building this application involved pair‑programming, code reviews and daily stand‑ups.  The project demonstrates an ability to get up to speed on new technologies quickly and deliver a cohesive product within a short timeframe.

---

## 🌱 Reflections & next steps

Acebook was completed over the course of a week at Makers Academy.  It served as a practical exercise in full‑stack engineering, agile processes and teamwork.  With more time we would like to:

- Deploy to a cloud platform (e.g. Render or Fly.io) with a managed MongoDB instance.
- Add social features such as friends, private messaging and notifications.
- Improve accessibility and add comprehensive unit and integration tests.

We’re proud of what we achieved and hope it provides a useful demonstration of our technical foundations.
