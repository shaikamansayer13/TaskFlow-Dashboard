import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = [...userData]; // clone employees array

    // CHECK IF EMPLOYEE EXISTS
    const employee = data.find(
      (emp) => emp.firstName.toLowerCase() === assignTo.toLowerCase()
    );

    if (!employee) {
      alert("Employee not found! Please enter a valid employee name.");
      setTaskTitle("");
      setCategory("");
      setAssignTo("");
      setTaskDate("");
      setTaskDescription("");
      return;
    }

    // ASSIGN TASK
    employee.tasks.push(taskObj);
    employee.taskCounts.newTask++;

    // UPDATE GLOBAL CONTEXT + LOCAL STORAGE
    setUserData(data);
    localStorage.setItem("employees", JSON.stringify(data));

    // RESET FIELDS
    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="create-task-container">
      <form className="create-task-form" onSubmit={submitHandler}>
        {/* LEFT SECTION */}
        <div className="left-section">
          <div className="form-group">
            <label>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
            />
          </div>

          <div className="form-group">
            <label>Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">
          <label>Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>

          <button className="create-task-btn">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
