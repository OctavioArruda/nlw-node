import express, { response } from "express";

const app = express();
const listenPort = 3333;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello node",
  });
});

app.post("/user", (req, res) => {
  return res.json({
    message: "User created",
  });
});

app.listen(listenPort, () => {
  console.log(`Server is running on port ${listenPort}`)
});