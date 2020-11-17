import React, { useState } from "react";

export default function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) onCreate(value);

    setValue("");
  }

  return (
    <div className="addTodo">
      <form onSubmit={submitHandler}>
        <input
          value={value}
          placeholder="Add new todo"
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="btn-add">
          +
        </button>
      </form>
    </div>
  );
}
