# Dockerized Express + MongoDB Blog CRUD — Portfolio Project

A simple, containerized blog project demonstrating **Create, Read, Update, Delete (CRUD)** operations using Node.js, Express, MongoDB, and plain HTML. Perfect for a portfolio to showcase full-stack development skills.

---

## Features

* **Create, Read, Update, Delete** posts
* MongoDB persistence
* Minimal HTML frontend for interacting with posts
* Fully **Dockerized** with Docker Compose
* Ready for portfolio showcase

---

## Project Structure

```
blog-portfolio/
│
├── compose.yaml       # Docker Compose file
├── Dockerfile         # Dockerfile for Express server
├── README.md          # Project documentation
├── package.json       # Node.js dependencies
├── server.js          # Express server and API
└── public/
    └── index.html    # Simple HTML frontend for CRUD
```

---

## Prerequisites

* [Docker](https://www.docker.com/get-started) installed
* [Docker Compose](https://docs.docker.com/compose/) installed
* Basic knowledge of Node.js and MongoDB (optional)

---

## Quick Start

1. Clone the repository:

```bash
git clone <your-repo-url>
cd blog-portfolio
```

2. Build and run containers:

```bash
docker compose up --build
```

3. Open the blog in your browser:

```
http://localhost:3000
```

4. Optional: Access MongoDB via `mongo-express` if included in compose:

```
http://localhost:8081
```

---

## API Endpoints

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /posts     | Get all posts           |
| POST   | /posts     | Create a new post       |
| PUT    | /posts/:id | Update an existing post |
| DELETE | /posts/:id | Delete a post           |

---

## Usage

* Add a new post using the input fields at the top
* Edit post title or content inline
* Delete posts using the "Delete" button
* All changes persist in MongoDB

---

## Tech Stack

* Node.js & Express
* MongoDB
* Docker & Docker Compose
* HTML & CSS (minimal frontend)

---

## Notes

* MongoDB runs on **27017**
* Express server runs on **3000**
* Data persists through Docker volumes

---

## Next Steps (Optional Enhancements)

* Add authentication and login system
* Add UI enhancements with Tailwind or Bootstrap
* Add TypeScript support
* Integrate CI/CD for portfolio showcase

---

## License

MIT License
