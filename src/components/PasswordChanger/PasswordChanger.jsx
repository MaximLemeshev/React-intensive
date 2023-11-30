import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "../PasswordChanger/PasswordChanger.module.css";

const PasswordChanger = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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
  const handleLogout = () => {
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Password changed successfully!");
    }

    localStorage.removeItem("token");
    navigate("/login");
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

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default PasswordChanger;
