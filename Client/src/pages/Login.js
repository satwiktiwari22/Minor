import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// const navigate = useNavigate();
// const handleClick = () => {
//   const username = document.querySelector(".username-or-email").value;
//   const password = document.querySelector(".password1").value;
//   if (username === admin.username && password === admin.password) {
//     // navigate("/chat-panel");
//   } else {
//   }
// };
const Desktop2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      navigate("/chat-panel");
    } else {
      navigate("/desktop-2");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    });
    const res = await response.json();
    if (response.ok) {
      navigate("/chat-panel");
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="desktop-2">
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="frame-group">
        <div className="rectangle-group">
          <div className="frame-child2" />
          <div className="frame-child3" />
        </div>
        <img className="group-icon1" alt="" src="/group1.svg" />
        <div className="login2">Login</div>
        <div className="sign-in">Sign in to your Account</div>
        <div className="frame-child4" />
        <div className="frame-child5" />

        <form>
          <input
            type="text"
            placeholder="Username"
            className="username-or-email "
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="password1"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="frame-child6" onClick={handleSubmit} />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Incorrect username or password
            </Alert>
          </Snackbar>
        </form>

        <img className="group-icon2" alt="" src="/group.svg" />
        <img className="vector-icon2" alt="" src="/vector.svg" />

        <div className="login3">Login</div>
        <div className="no-account">Don’t have an account?</div>
        <Link className="register-here" to="/desktop-3">
          Register here
        </Link>
      </div>
      <div className="app-name2">APP_Name</div>
      <button className="home-container">
        <Link className="home1" to="/">
          Home
        </Link>
      </button>
      <button className="sign-up-container">
        <Link className="sign-up2" to="/desktop-3">
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default Desktop2;
