const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

//connecting Database
const connectDB = require("./db");
connectDB();

app.get("/", (req, res) => res.send("Backend is running"));

app.listen(5000, () => console.log("Server running on port 5000"));
