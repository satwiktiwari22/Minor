import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isSameSender,
  isLastMessage,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/Chatprovider";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import "./scroll.css";
const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  return (
    <ScrollableFeed className="scroll">
      {messages &&
        messages.map((m, i) => (
          <div
            key={m._id}
            style={{
              display: "flex",
            }}
          >
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip title={m.sender.name}>
                <Avatar
                  sx={{
                    width: "35px",
                    height: "35px",
                    margin: "5px 5px 0px 5px",
                    backgroundColor: "#751CCE",
                    color: "#E5D6F4",
                  }}
                >
                  {m.sender.name[0]}
                </Avatar>
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#751CCE" : "#E5D6F4"
                }`,
                color: `${m.sender._id === user._id ? "white" : "black"}`,
                borderRadius: "20px",
                padding: "5px 15px",
                width: "fit-content",
                maxWidth: "70%",
                marginTop: `${isSameUser(messages, m, i) ? "2px" : "5px"}`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
