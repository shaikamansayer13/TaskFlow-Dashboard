import React from "react";

const TaskListNumbers = (props) => {
  const data = props.data;

  return (
    <div className="task-numbers-wrapper">
      <div className="box blue">
        <h2>{data.taskCounts.newTask}</h2>
        <h3>New Task</h3>
      </div>

      <div className="box green">
        <h2>{data.taskCounts.completed}</h2>
        <h3>Completed Task</h3>
      </div>

      <div className="box yellow">
        <h2>{data.taskCounts.active}</h2>
        <h3>Accepted Task</h3>
      </div>

      <div className="box red">
        <h2>{data.taskCounts.failed}</h2>
        <h3>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
