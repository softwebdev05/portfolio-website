const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
let initialPath = path.join(__dirname, "");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.listen(3000, () => {
  console.log("listening to port 3000...");
});