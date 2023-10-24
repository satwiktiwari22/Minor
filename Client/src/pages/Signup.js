import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";

const Desktop3 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await fetch("/auth/signup", {
  //       method: "POST",
  //       body: JSON.stringify({ username, email, password }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
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
