const express = require("express");
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require("./types");
const todo = require("./db");

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(400).json({
      msg: "Invalid input",
    });
    return;
  }
  todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
  res.json({
    msg: "Todo created successfully",
  });
});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(400).json({
      msg: "Invalid input",
    });
  }
});

app.get("/todos", function (req, res) {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
