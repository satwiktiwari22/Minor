import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { emailValidation } from "../config/ChatLogics";
import { ChatState } from "../Context/Chatprovider";
const Desktop3 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const { setUser } = ChatState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen1(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setOpen1(true);
      return;
    }
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    });
    const res = await response.json();
    if (response.ok) {
      navigate("/desktop-2");
      console.log(res);
      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="desktop-3">
      <div className="desktop-3-item" />
      <div className="desktop-3-child" />
      <div className="frame-parent">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
        <img
          className="user-svgrepocom-icon"
          alt=""
          src="/user-svgrepocom.svg"
        />
        <div className="sign-up1">Sign up</div>
        <div className="create-new-account">Create your new Account</div>
        <div className="frame-inner" />
        <div className="rectangle-div" />
        <div className="frame-child1" />
        <form>
          <input
            className="username"
            placeholder="Username"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="email"
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="rectangle-button" onClick={handleSubmit} />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please fill all the fields
            </Alert>
          </Snackbar>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
            <Alert
              onClose={handleClose1}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please enter a valid email
            </Alert>
          </Snackbar>
        </form>
        <img className="group-icon" alt="" src="/group.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <div className="register">Register</div>
        <div className="existing-account">Already have an account?</div>
        <Link className="login-here" to="/desktop-2">
          Login here
        </Link>
      </div>

      <div className="app-name1">APP_Name</div>
      <button className="home-wrapper">
        <Link className="home" to="/">
          Home
        </Link>
      </button>
      <button className="login-container">
        <Link className="login1" to="/desktop-2">
          Login
        </Link>
      </button>

      <img
        className="user-svgrepocom-icon1"
        alt=""
        src="/user-svgrepocom1.svg"
      />
    </div>
  );
};

export default Desktop3;
