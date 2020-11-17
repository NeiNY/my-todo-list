import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  console.log(props.todos);

  return (
    <ol>
      {props.todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} key={todo.id} />
      ))}
    </ol>
  );
}
