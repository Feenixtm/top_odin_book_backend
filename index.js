const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/indexRouter.js");

const app = express();

// Use form data
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

const PORT = process.env.APP_PORT || 5051;

app.listen(PORT, (error) => {
    if (error) {
        throw new Error("An error occurred on server startup:", error);
    }

    console.log("Listening to PORT: ", PORT);
})