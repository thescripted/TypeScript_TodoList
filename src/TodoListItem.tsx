import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggle: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggle }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggle(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
