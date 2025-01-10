import React, { useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodo] = useState([]);
  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = res.json();
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo
        todos={[
          {
            title: "Rahul",
            completed: false,
            description: "Learn React",
          },
          {
            title: "Ram",
            completed: true,
            description: "Learn node",
          },
        ]}
      ></Todo>
    </div>
  );
}

export default App;
