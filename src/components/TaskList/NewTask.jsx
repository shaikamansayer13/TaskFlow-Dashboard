import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = (props) => {
  const task = props.data;
  const user = props.user;

  const [userData, setUserData] = useContext(AuthContext);

  if (!task || !user || !userData) return null;

  const acceptTask = () => {
    const updated = [];

    for (let i = 0; i < userData.length; i++) {
      const emp = userData[i];

      if (emp.id !== user.id) {
        updated.push(emp);
        continue;
      }

      const updatedEmp = {
        ...emp,
        tasks: [],
        taskCounts: { ...emp.taskCounts },
      };

      for (let j = 0; j < emp.tasks.length; j++) {
        const t = emp.tasks[j];

        if (t.taskTitle === task.taskTitle) {
          updatedEmp.tasks.push({
            ...t,
            newTask: false,
            active: true,
            completed: false,
            failed: false,
          });

          updatedEmp.taskCounts.newTask -= 1;
          updatedEmp.taskCounts.active += 1;
        } else {
          updatedEmp.tasks.push(t);
        }
      }

      updated.push(updatedEmp);
    }

    setUserData(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
  };

  return (
    <div className="taskcard new">
      <div className="taskcard-header">
        <h3 className="taskcard-badge">{task.category}</h3>
        <h4 className="taskcard-date">{task.taskDate}</h4>
      </div>

      <h2 className="taskcard-title">{task.taskTitle}</h2>
      <p className="taskcard-desc">{task.taskDescription}</p>

      <div className="taskcard-footer single">
        <button onClick={acceptTask} className="btn-complete full">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
