import express from "express";
import userRouter from "./router/userRouter.js";
const app = express();

app.use(express.json());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
