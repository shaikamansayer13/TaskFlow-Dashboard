import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  // FIX: If data is not loaded yet, return nothing
  if (!userData || userData.length === 0) {
    return <p className="text-white">No data loaded...</p>;
  }

  return (
    <div className="alltask-container">
      <div className="alltask-header">
        <h2 className="col">Employee Name</h2>
        <h3 className="col">New Task</h3>
        <h5 className="col">Active Task</h5>
        <h5 className="col">Completed</h5>
        <h5 className="col">Failed</h5>
      </div>

      <div>
        {userData.map((elem, idx) => (
          <div key={idx} className="alltask-row">
            <h2 className="col text-white">{elem.firstName}</h2>
            <h3 className="col text-blue">{elem.taskCounts.newTask}</h3>
            <h5 className="col text-yellow">{elem.taskCounts.active}</h5>
            <h5 className="col text-white">{elem.taskCounts.completed}</h5>
            <h5 className="col text-red">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
