import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHanlder = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHanlder} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
