import React from "react";

const FailedTask = (props) => {
  const task = props.data;

  return (
    <div className="taskcard failed">
      <div className="taskcard-header">
        <h3 className="taskcard-badge">{task.category}</h3>
        <h4 className="taskcard-date">{task.taskDate}</h4>
      </div>

      <h2 className="taskcard-title">{task.taskTitle}</h2>
      <p className="taskcard-desc">{task.taskDescription}</p>

      <div className="taskcard-footer single">
        <button className="btn-failed full" disabled>
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
