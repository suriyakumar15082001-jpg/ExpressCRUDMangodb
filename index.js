import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Route from "./src/routes/userroutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", Route);


const PORT = process.env.PORT || 3000;

async function startServer() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exitCode = 1;
});