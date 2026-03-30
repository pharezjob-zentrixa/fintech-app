const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/pharex");

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/wallet", require("./routes/wallet"));

app.listen(5000, () => console.log("Server running"));
