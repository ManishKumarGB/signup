import express from "express";
import { exec } from "child_process";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth.js";
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/Attendance")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
