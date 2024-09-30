interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        delete
      </button>
    </li>
  );
}
