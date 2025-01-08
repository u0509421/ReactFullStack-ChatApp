import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // root route http://localhost:3000
  res.send("hello world I am new here");
});

app.listen(3000, () => console.log(`server running on port ${PORT}`));
