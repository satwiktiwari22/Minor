import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { ChatState } from "../Context/Chatprovider";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";
import axios from "axios";
import "./styles.css";
import ScrollableChat from "./ScrollableChat";

const SingleChat = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const { user, setSelectedChat } = ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "http://localhost:5000/api/message",
          { content: newMessage, chatId: selectedChat._id },
          config
        );
        console.log(data);

        setMessages([...messages, data]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const typingHandler = (e) => {
    setNewMessage(e.target.value);
    //typing indicator logic
  };

  return (
    <>
      {selectedChat ? (
        <Box
          sx={{
            width: `calc(100% - 450px)`,
            height: `calc(100% - 170px)`,
            position: "absolute",
            top: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundColor: "#EDE4F5",
            padding: "0 30px",
          }}
        >
          {loading ? (
            <CircularProgress
              color="secondary"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ) : (
            <div className="messages">
              <ScrollableChat messages={messages} />
            </div>
          )}
          <Toolbar
            sx={{
              position: "fixed",
              bottom: 2,
              left: "25%",
              bgcolor: "#EDE4F5",
            }}
          >
            <IconButton>
              <InsertEmoticonIcon
                sx={{ color: "#751CCE", fontSize: "30px", margin: "0 5px" }}
              />
            </IconButton>
            <Paper
              component="form"
              sx={{
                p: "0.5px 4px",
                display: "flex",
                alignItems: "center",
                width: "900px",
                height: 45,
                borderRadius: "20px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, marginLeft: "20px" }}
                placeholder="Type a message"
                inputProps={{ "aria-label": "Type a message" }}
                onChange={typingHandler}
                value={newMessage}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(e);
                  }
                }}
              />
            </Paper>
            <IconButton onClick={sendMessage}>
              <SendIcon
                sx={{ color: "#751CCE", fontSize: "30px", margin: "0 5px" }}
              />
            </IconButton>
          </Toolbar>
        </Box>
      ) : (
        <Box>
          <h1>Chat App</h1>
          <p>Click on a chat to start messaging</p>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
