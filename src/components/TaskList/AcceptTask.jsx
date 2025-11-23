import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = (props) => {
  const task = props.data;
  const user = props.user;

  const [userData, setUserData] = useContext(AuthContext);

  if (!task || !user || !userData) return null;

  const markCompleted = () => {
    const updated = [];

    for (let i = 0; i < userData.length; i++) {
      let emp = userData[i];

      // If this is NOT the logged-in employee, keep them same
      if (emp.id !== user.id) {
        updated.push(emp);
        continue;
      }

      // Copy employee
      let updatedEmp = {
        ...emp,
        tasks: [],
        taskCounts: { ...emp.taskCounts },
      };

      // Loop through tasks
      for (let j = 0; j < emp.tasks.length; j++) {
        let t = emp.tasks[j];

        if (t.taskTitle === task.taskTitle) {
          // Update the correct task
          updatedEmp.tasks.push({
            ...t,
            completed: true,
            active: false,
            failed: false,
            newTask: false,
          });

          updatedEmp.taskCounts.active -= 1;
          updatedEmp.taskCounts.completed += 1;
        } else {
          updatedEmp.tasks.push(t);
        }
      }

      updated.push(updatedEmp);
    }

    setUserData(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
  };

  const markFailed = () => {
    const updated = [];

    // Loop over all employees
    for (let i = 0; i < userData.length; i++) {
      const emp = userData[i];

      // If this is not the logged-in employee → keep same
      if (emp.id !== user.id) {
        updated.push(emp);
        continue;
      }

      // Copy employee object
      const updatedEmp = {
        ...emp,
        tasks: [],
        taskCounts: { ...emp.taskCounts },
      };

      // Loop over tasks for this employee
      for (let j = 0; j < emp.tasks.length; j++) {
        const t = emp.tasks[j];

        if (t.taskTitle === task.taskTitle) {
          // This is the task we want to update
          updatedEmp.tasks.push({
            ...t,
            failed: true,
            active: false,
            completed: false,
            newTask: false,
          });

          // update counts
          updatedEmp.taskCounts.active -= 1;
          updatedEmp.taskCounts.failed += 1;
        } else {
          // Keep task unchanged
          updatedEmp.tasks.push(t);
        }
      }

      updated.push(updatedEmp);
    }

    // Update state
    setUserData(updated);

    // Save to localStorage
    localStorage.setItem("employees", JSON.stringify(updated));
  };

  return (
    <div className="taskcard accept">
      <div className="taskcard-header">
        <h3 className="taskcard-badge">{task.category}</h3>
        <h4 className="taskcard-date">{task.taskDate}</h4>
      </div>

      <h2 className="taskcard-title">{task.taskTitle}</h2>
      <p className="taskcard-desc">{task.taskDescription}</p>

      <div className="taskcard-footer">
        <button onClick={markCompleted} className="btn-complete">
          Mark as Completed
        </button>
        <button onClick={markFailed} className="btn-failed">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
