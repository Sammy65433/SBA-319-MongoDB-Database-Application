
import 'dotenv/config';
import connectDB from './config/db.js';
import dotenv from "dotenv";

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the NBA API.");
});

connectDB();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  
});