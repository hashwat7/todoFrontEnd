import "bootstrap/dist/css/bootstrap.min.css";
import { RiCalendarTodoLine } from "react-icons/ri";
import "./CreateTodo.css";
import { useState } from "react";

export const CreateTodo = ({ props }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopup2 = () => {
    setShowPopup2(!showPopup2);
  };

  return (
    <>
      <h1>
        <RiCalendarTodoLine />
        <span style={{ marginLeft: "15px" }}>ZenTasks</span>
      </h1>
      <div className="container text-center">
        <div className="row td-row">
          <input
            id="title"
            className="col-3 td-ipt-style"
            type="text"
            placeholder="Title"
            value={title}
            autoComplete="off"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            id="decription"
            className="col-6 td-ipt-style"
            type="text"
            placeholder="Task Essence"
            autoComplete="off"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (description == "" || title == "") {
                togglePopup2();
                return;
              }
              setDescription("");
              setTitle("");
              fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  completed: false,
                }),
                headers: {
                  "Content-Type": "application/json",
                  "Content-Length": JSON.stringify({ key: "value" }).length,
                },
              }).then(async (res) => {
                const json = await res.json();
                togglePopup();
              });
            }}
            className="col-2 btn btn-success"
          >
            Add a todo
          </button>
        </div>
        {showPopup && (
          <div>
            <h3
              style={{
                color: "rgb(54, 94, 50)",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                marginBottom: "30px",
              }}
            >
              {" "}
              Todo Added
            </h3>
            <span style={{ display: "none" }}>
              {setTimeout(() => {
                togglePopup();
              }, 2000)}
            </span>
          </div>
        )}
        {showPopup2 && (
          <div>
            <h3
              style={{
                color: "rgb(54, 94, 50)",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                marginBottom: "30px",
              }}
            >
              Enter Title & Description to proceed
            </h3>
            <span style={{ display: "none" }}>
              {setTimeout(() => {
                togglePopup2();
              }, 2000)}
            </span>
          </div>
        )}
      </div>
    </>
  );
};
