import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://todobackend-ckwn.onrender.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 2000);
  }, []);

  return (
    <>
      <div className="contain">
        <CreateTodo />
        <Header />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
