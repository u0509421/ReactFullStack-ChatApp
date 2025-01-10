// package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// routes imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// middleware
// cookieParser 要在express.json之前使用！！！！否则protectRoute那里无法拿到cookie
app.use(cookieParser());
app.use(express.json()); // for parsing application/json (from req.body)

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:3000
//   res.send("hello world I am new here");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
