const router = require("./routes/index.js")
const express = require('express');
const app = express();


const cors = require("cors")

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200

}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/", router)


module.exports = app;
