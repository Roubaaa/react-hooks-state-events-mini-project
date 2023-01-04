import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTaskOne}) {


  const taskList = tasks.map((task) => (
    <Task key={task.text} text={task.text}
      category={task.category} onDeleteTaskOne={onDeleteTaskOne}/>
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
