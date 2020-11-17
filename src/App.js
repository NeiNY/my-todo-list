import React, { useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
import Context from "./context";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, complited: false, title: "Сходить в кино" },
    { id: 2, complited: false, title: "Приготовить чего-нибудь на ужин" },
    { id: 3, complited: false, title: "Доделать проект(когда-нибудь)" },
  ]);

  function onChange(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.complited = !todo.complited;
        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          complited: false,
          title: title,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ onChange, removeTodo }}>
      <div className="App">
        <header>
          <h1>ToDo</h1>
        </header>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} /> : <p>No todos now</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
