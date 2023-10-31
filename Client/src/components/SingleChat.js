import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";

const SingleChat = ({ selectedChat }) => {
  return (
    <>
      {selectedChat ? (
        <Box>
          <Box>
            <h1>Messages here</h1>
          </Box>
          <Toolbar
            sx={{
              position: "fixed",
              bottom: 2,
              left: "25%",
              bgcolor: "#EDE4F5",
            }}
          >
            <InsertEmoticonIcon
              sx={{ color: "#751CCE", fontSize: "30px", margin: "0 5px" }}
            />
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
              />
            </Paper>
            <SendIcon
              sx={{ color: "#751CCE", fontSize: "30px", margin: "0 5px" }}
            />
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
