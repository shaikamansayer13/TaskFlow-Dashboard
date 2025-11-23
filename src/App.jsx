import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // admin | employee | null
  const [loggedUserId, setLoggedUserId] = useState(null);

  const [userData] = useContext(AuthContext);

  // Load logged in user
  useEffect(() => {
    const saved = localStorage.getItem("loggedInUser");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.role);
      if (parsed.role === "employee") {
        setLoggedUserId(parsed.data.id);
      }
    }
  }, []);

  // LOGIN HANDLER
  const handleLogin = (email, password) => {
    // ADMIN
    if (email === "admin@me.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
      return;
    }

    // EMPLOYEE LOGIN
    const employee = userData?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setUser("employee");
      setLoggedUserId(employee.id);
    } else {
      alert("Invalid Credentials");
    }
  };

  // ALWAYS get fresh data from context
  let loggedInEmployee = null;

  if (user === "employee") {
    if (userData) {
      loggedInEmployee = userData.find((emp) => emp.id === loggedUserId);
    }
  }

  // UI RENDER
  if (!user) return <Login handleLogin={handleLogin} />;
  if (user === "admin") return <AdminDashboard changeUser={setUser} />;

  if (user === "employee")
    return <EmployeeDashboard changeUser={setUser} data={loggedInEmployee} />;

  return null;
};

export default App;
