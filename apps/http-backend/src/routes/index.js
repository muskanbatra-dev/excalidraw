import JWT_PASSWORD from "../config";
import express from "express";
import { middleware } from "../middleware/INDEX.JS";
const app = express();

app.post("/signUp", (req, res) => {
  // db call
  res.json({ userId: "67" });
});

app.post("signIn", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_PASSWORD);
  res.json({ token });
});

app.post("/createRoom", middleware, (req, res) => {
  // db call

  res.json({
    roomId: "some-room-id",
  });
});

app.listen(3001);
