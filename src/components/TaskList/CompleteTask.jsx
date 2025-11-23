import React from "react";

const CompleteTask = (props) => {
  const task = props.data;

  return (
    <div className="taskcard complete">
      <div className="taskcard-header">
        <h3 className="taskcard-badge">{task.category}</h3>
        <h4 className="taskcard-date">{task.taskDate}</h4>
      </div>

      <h2 className="taskcard-title">{task.taskTitle}</h2>
      <p className="taskcard-desc">{task.taskDescription}</p>

      <div className="taskcard-footer single">
        <button className="btn-complete full" disabled>
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
