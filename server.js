const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://root:StrongPass123@mongodb:27017/blog?authSource=admin");

const Post = mongoose.model("Post", {
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

// CREATE
app.post("/posts", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// READ ALL
app.get("/posts", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// UPDATE
app.put("/posts/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(post);
});

// DELETE
app.delete("/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running on port 3000"));