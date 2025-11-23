import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={submitHandler} className="login-form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="login-input"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="login-input mt"
          />

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        {/* DEMO CREDENTIALS */}
        <div className="demo-box">
          <h3>🔐 Demo Login</h3>

          {/* ADMIN */}
          <div className="demo-section">
            <p className="section-title">Admin</p>
            <p>
              Email: <span className="code">admin@me.com</span>
            </p>
            <p>
              Password: <span className="code">123</span>
            </p>
          </div>

          {/* EMPLOYEES */}
          <div className="demo-section">
            <p className="section-title">Employees Emails</p>

            <ul>
              <li>
                <span className="code">employee1@example.com</span>
              </li>
              <li>
                <span className="code">employee2@example.com</span>
              </li>
              <li>
                <span className="code">employee3@example.com</span>
              </li>
              <li>
                <span className="code">employee4@example.com</span>
              </li>
              <li>
                <span className="code">employee5@example.com</span>
              </li>
            </ul>

            <p className="employee-pass">
              Password for all employees: <span className="code">123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
