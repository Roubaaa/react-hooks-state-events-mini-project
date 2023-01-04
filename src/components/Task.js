import React from "react";

function Task({category, text, onDeleteTaskOne}) {
  function handleClickDelete() {
    onDeleteTaskOne(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClickDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
