import React, { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  return (
    <div className="gap-4 flex items-center jsutify-between">
      <input
        type="text"
        placeholder="title"
        className="px-3 py-2"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        className="px-3 py-2"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        className="px-3 py-2 rounded-lg bg-green-200"
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description }),
          }).then(async function (res) {
            const json = res.json();
            alert("json added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}

export default CreateTodo;
