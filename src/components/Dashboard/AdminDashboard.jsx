import React from "react";
import Header from "../other/Header";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";

const AdminDashboard = (props) => {
  // RESET FUNCTION
  const resetData = () => {
    if (!window.confirm("Are you sure? This will reset ALL data!")) {
      return;
    }

    localStorage.clear(); // delete all stored employees + login
    window.location.reload(); // reload app → loads default data
  };

  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />

      {/* RESET BUTTON */}
      <button
        onClick={resetData}
        className="bg-red-600 text-white px-7 py-2 mb-5 mt-5 rounded-full hover:bg-red-700 transition  duration-300  font-semibold cursor-pointer"
      >
        Reset All Data
      </button>

      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
