// server.js

import 'dotenv/config';
import express from "express";

import connectDB from './config/db.js';
import dotenv from "dotenv";


import teamRoutes from "./routes/teamRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/teams", teamRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the NBA API.");
});

// connectDB();



// Start the Express server

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to Start:", error);
  }
};

startServer();

// console.log(process.env.MONGODB_URI);
