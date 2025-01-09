import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // root route http://localhost:3000
  res.send("hello world I am new here");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
