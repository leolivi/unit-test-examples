import { useState, FormEvent } from "react";
import "./styles.css";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
