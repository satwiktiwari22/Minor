// import { useCallback } from "react";
import { Link } from "react-router-dom";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import "./Landing Page.css";
const Desktop1 = () => {
  // const onFrameButton2Click = useCallback(() => {
  //   const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
  // if (anchor) {
  //   anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  // }
  //   anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  // }, []);
  const onFrameButton2Click = () => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  // const onFrameButton3Click = useCallback(() => {
  //   const anchor = document.querySelector("[data-scroll-to='frameContainer']");
  // if (anchor) {
  //   anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  // }
  //   anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  // }, []);
  const onFrameButton3Click = () => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className="desktop-1">
      <ArrowCircleUpOutlinedIcon
        className="arrow-icon"
        sx={{ width: "30px", height: "30px" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="desktop-1-child" />
      <div className="ellipse-div" />
      <div className="app-name">APP_Name</div>
      <button className="login-wrapper">
        <Link className="login" to="/desktop-2">
          Login
        </Link>
      </button>
      <button className="sign-up-wrapper">
        <Link className="sign-up" to="/desktop-3">
          Sign Up
        </Link>
      </button>
      <button className="contact-us-wrapper" onClick={onFrameButton2Click}>
        <div className="contact-us">Contact us</div>
      </button>
      <button className="about-us-wrapper" onClick={onFrameButton3Click}>
        <div className="about-us">About us</div>
      </button>
      <div className="tag-content-title">“Where Every Word Matters”</div>
      <div className="tag-content">
        Step into a world of meaningful interactions. Our real-time chat
        application is crafted to make every conversation count. With a blend of
        customization, multimedia sharing, and intuitive features, connect like
        never before.
      </div>
      <div className="about-us1">About Us</div>
      <div className="contact-us1">Contact Us</div>
      <div className="aboutus-content-parent">
        <div className="aboutus-content">
          Hi! We are a team of passionate students working on a minor project
          focused on enhancing real-time communication. Our mission is to create
          an intuitive platform that facilitates seamless conversations and
          collaborative spaces. With dedication and creativity, we're determined
          to make a meaningful impact in the world of communication. Join us as
          we build a platform tailored for the modern user!
        </div>
        <div className="anchor-frame-5" data-scroll-to="frameContainer" />
      </div>
      <img className="line-icon" alt="" src="/undefined2.png" />
      <img className="desktop-1-child1" alt="" src="/undefined2.png" />
      <div className="contactus-content-parent">
        <div className="contactus-content">
          Feel free to reach out to us anytime! Whether you have questions,
          suggestions, or just want to say hello, we're here for you.
        </div>
        <div className="anchor-frame-6" data-scroll-to="frameContainer1" />
      </div>
      <a className="instagram" />
      <a className="twitterx" />
      <a className="linkedin" />
      <img className="phone-icon" alt="" src="/undefined3.png" />
      <div className="mailid-parent">
        <div className="mailid">chatsenseoriginal@mail.com</div>
        <div className="div">+911234567890</div>
        <img className="email-sign-icon" alt="" src="/undefined4.png" />
      </div>
    </div>
  );
};

export default Desktop1;
