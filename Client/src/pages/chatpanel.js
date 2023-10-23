import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Chatpanel = ({ username }) => {
  return (
    <>
      <div className="chatpanel">
        <h1>welcome, {username} !!!</h1>
      </div>
    </>
  );
};

export default Chatpanel;
