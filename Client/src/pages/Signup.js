import { Link } from "react-router-dom";
import "./Signup.css";

const Desktop3 = () => {
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
          />
          <input
            className="email"
            placeholder="Email"
            type="email"
            name="email"
          />
          <input
            className="password"
            placeholder="Password"
            type="password"
            name="password"
          />
          <button className="rectangle-button" />
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
