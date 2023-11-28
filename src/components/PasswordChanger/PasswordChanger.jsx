import { useState } from "react";
import { Link } from "react-router-dom";
import s from "../PasswordChanger/PasswordChanger.module.css";

const PasswordChanger = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Password changed successfully!");
    }
  };

  return (
    <div className={s.wrap}>
      <h1>Password Change</h1>
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={handleChange}
      />
      {error && <div className={s.error}>{error}</div>}
      {success && <div className={s.success}>{success}</div>}
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/login">
        <button>Log out</button>
      </Link>
    </div>
  );
};

export default PasswordChanger;
