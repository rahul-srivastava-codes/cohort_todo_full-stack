const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rahulsrichunar:UFl4rUSGNh1w9M7N@cluster0.kygnw.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo: todo,
};
