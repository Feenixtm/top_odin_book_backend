const express = require('express');

const messageRouter = express.Router();
const messageController = require("../controllers/messageController.js");

messageRouter.get("/", messageController.getAllMessages);
messageRouter.post("/create/:id", messageController.createMessage);
messageRouter.put("/update/:id", messageController.updateMessage);
messageRouter.delete("/delete/:id", messageController.deleteMessage);

module.exports = messageRouter;