import JWT_PASSWORD from "../config";
import express from "express";
import { middleware } from "../middleware/INDEX.JS";
const app = express();

app.post("/signUp", (req, res) => {});

app.post("signIn", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_PASSWORD);
  res.json({ token });
});

app.post("/createRoom", middleware, (req, res) => {});

app.listen(3001);
