import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write App", complete: false },
];
function App() {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
}

export default App;
