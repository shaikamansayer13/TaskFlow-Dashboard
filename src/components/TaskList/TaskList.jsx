import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  const data = props.data; // employee data 
  const user = props.user; // logged-in user 

  if (!data || !data.tasks) {
    return null;
  }

  return (
    <div id="tasklist">
      {data.tasks.map((task, idx) => {
        if (task.active)
          return <AcceptTask key={idx} data={task} user={user} />;

        if (task.newTask) return <NewTask key={idx} data={task} user={user} />;

        if (task.completed)
          return <CompleteTask key={idx} data={task} user={user} />;

        if (task.failed)
          return <FailedTask key={idx} data={task} user={user} />;

        return null;
      })}
    </div>
  );
};

export default TaskList;
