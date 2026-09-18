const express = require('express');

const postRouter = express.Router();
const postController = require("../controllers/postController.js");

postRouter.get("/", postController.getAllPosts);
postRouter.post("/create/:id", postController.createPost);
postRouter.put("/update/:id", postController.updatePost);
postRouter.delete("/delete/:id", postController.deletePost);

module.exports = postRouter;