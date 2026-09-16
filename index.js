const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.APP_PORT || 5051;

app.listen(PORT, (error) => {
    if (error) {
        throw new Error("An error occurred on server startup:", error);
    }

    console.log("Listening to PORT: ", PORT);
})