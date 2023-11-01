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
import io from "socket.io-client";
import Lottie, { LottiePlayer } from "lottie-react";
import * as typingAnimation from "../animations/typer.json";
import useMediaQuery from "@mui/material/useMediaQuery";

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChat = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const { user, setSelectedChat } = ChatState();
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const matches = useMediaQuery("(max-width:1000px)");

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
      socket.emit("join chat", selectedChat._id);
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => {
      setSocketConnected(true);
    });
    socket.on("typing", () => {
      setIsTyping(true);
    });
    socket.on("stop typing", () => {
      setIsTyping(false);
    });
  }, []);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        //show notification
      } else {
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    socket.emit("stop typing", selectedChat._id);
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
        socket.emit("new message", data);

        setMessages([...messages, data]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const typingHandler = (e) => {
    setNewMessage(e.target.value);
    //typing indicator logic
    if (!socketConnected) return;
    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypedTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypedTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  return (
    <>
      {selectedChat ? (
        <Box
          sx={{
            width: matches ? `calc(100% - 150px)` : `calc(100% - 450px)`,
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
          {isTyping ? (
            <Lottie
              animationData={typingAnimation}
              style={{
                width: "60px",
                height: "60px",
                marginTop: "5px",
                marginLeft: "30px",
              }}
            />
          ) : (
            <></>
          )}
          <Toolbar
            sx={{
              position: "fixed",
              bottom: 2,
              left: matches ? "15%" : "25%",
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
                width: "fit-content",
                height: 45,
                borderRadius: "20px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, marginLeft: "20px", width: "55vw" }}
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
