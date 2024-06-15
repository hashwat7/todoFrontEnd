import "./Todos.css";
import { LuListTodo } from "react-icons/lu";
export const Todos = ({ todos }) => {
  const completeIt = (todo) => {
    console.log(todo._id);
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id: todo._id }),
      headers: {
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify({ key: "value" }).length,
      },
    }).then(async (res) => {
      const response = await res.json();
    });
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            key={todo._id}
            className="container text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "2px 2px 3px",
              minHeight: "50px",
              padding: "10px",
            }}
          >
            <div className="row">
              <span className="col-1">
                <LuListTodo style={{ width: "100%", height: "50%" }} />
              </span>
              <span className="col-3 task-description">{todo.title}</span>
              <span className="col-5 task-description">{todo.description}</span>
              <button
                className="col-2 btn btn-primary"
                onClick={() => {
                  completeIt(todo);
                }}
              >
                {todo.completed == true ? "Completed" : "Mark As Complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
