const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/indexRouter.js");
const authRouter = require("./routes/authRouter.js");

const app = express();

// Allow front-end to talk to express backend
app.use(cors());
// Read JSON
app.use(express.json());
// Use form data
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/auth", authRouter);

const PORT = process.env.APP_PORT || 5051;

app.listen(PORT, (error) => {
    if (error) {
        throw new Error("An error occurred on server startup:", error);
    }

    console.log("Listening to PORT: ", PORT);
})