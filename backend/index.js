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
  todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo updated successfully",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  console.log(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
