import React from "react";

function Todo({ todos }) {
  return (
    <div>
      {todos.map(function (todos) {
        return (
          <>
            <h1 className="bg-red-500">{todos.title}</h1>
            <h1 className="bg-red-500">{todos.description}</h1>
            <button className="bg-red-500">
              {todos.completed === true ? "Completed" : "Mark as complete"}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Todo;
