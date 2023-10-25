import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { ChatState } from "../Context/Chatprovider";

const GroupChatModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [groupChatName, setGroupChatName] = useState("");
  const [groupChatMembers, setGroupChatMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { user, chats, setChats } = ChatState();
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users?search=${searchQuery}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSearchResults(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  //   const handleCreate = (e) => {
  //     e.preventDefault();
  //     const newChat = {
  //       name: groupChatName,
  //       users: [...groupChatMembers, user._id],
  //       group: true,
  //     };
  //     fetch("/api/chat/group", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //       body: JSON.stringify(newChat),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setChats([...chats, data]);
  //         handleClose();
  //       });
  //   };

  return (
    <>
      <Button onClick={handleOpen}>
        <AddIcon
          sx={{
            color: "#E5D6F4",
            width: "30px",
            height: "30px",
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: 12,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a Group Chat
          </Typography>
          <form action="">
            <input
              type="text"
              placeholder="Group Name"
              style={{
                width: "100%",
                height: "40px",
                marginTop: "10px",
                fontSize: "18px",
              }}
            />
            <input
              type="text"
              placeholder="Add Members"
              style={{
                width: "100%",
                height: "40px",
                marginTop: "5px",
                fontSize: "18px",
              }}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#751CCE",
                color: "#E5D6F4",
                width: "100%",
                height: "40px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
              //   onClick={handleCreate}
            >
              Create
            </Button>
          </form>
          {searchResults.slice(0, 4).map((result) => (
            <div
              key={result._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "5px",
                padding: "0px 5px",

                borderRadius: "5px",
                backgroundColor: "#751CCE",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                  margin: "0px 10px",
                }}
              >
                {result.name}
              </h3>

              <button
                style={{
                  backgroundColor: "#E5D6F4",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  padding: "4px 8px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Add
              </button>
            </div>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default GroupChatModal;
