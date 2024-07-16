import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function submitTodo(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">submit</button>
      </form>
      {todos.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
      {console.log(todos)}
    </div>
  );
}
