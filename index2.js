const express = require("express");
const app = express();
const port = 3002;

app.use(express.json());

app.get("/api/app/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello App - GET!", param: id });
});

app.get("/api/app/json", (req, res) => {
  res.json({ msg: "Hello App JSON - GET!" });
});

app.post("/api/app", (req, res) => {
  const { id } = req.body;
  res.json({ msg: "Hello App - POST!", id: id });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
