import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  const user = props.data; // the logged-in employee

  return (
    <div className="p-10 bg-[#1C1C1C] min-h-screen">
      <Header changeUser={props.changeUser} data={user} />

      <h2 className="section-title">Task Summary</h2>
      <TaskListNumbers data={user} />

      <h2 className="section-title">Task Board</h2>
      <TaskList data={user} user={user} />
    </div>
  );
};

export default EmployeeDashboard;
