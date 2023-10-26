import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/MoveToInbox";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import {
  AttachFile,
  Block,
  Call,
  EmojiEmotions,
  Send,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getSender } from "../config/ChatLogics";
import { ChatState } from "../Context/Chatprovider";
import { set } from "mongoose";
import GroupChatModal from "../components/GroupChatModal";

const drawerWidth = 240;

export default function Chatpanel() {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const [open3, setOpen3] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
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
      const res = await response.json();
      if (response.ok) {
        console.log(res);
        setSearchResults(res);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const accessChat = async (userId) => {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ userId }),
      });
      const res = await response.json();
      if (response.ok) {
        if (!chats.find((chat) => chat._id === res._id)) {
          setChats([res, ...chats]);
        }
        console.log(res);
        setSelectedChat(res);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchChats = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const res = await response.json();
      if (response.ok) {
        console.log(res);
        setChats(res);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
    fetchChats();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth + 64}px)`,
          backgroundColor: "#751CCE",
          color: "#EDF4F5",
        }}
      >
        <Toolbar>
          <Avatar />
          <Typography variant="h6" noWrap component="div" padding={"0px 20px"}>
            user
          </Typography>
          <IconButton sx={{ marginLeft: "auto", padding: "10px" }}>
            <CallIcon />
          </IconButton>
          <IconButton sx={{ padding: "10px", margin: 2 }}>
            <VideocamIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 64,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 64,
            boxSizing: "border-box",
            backgroundColor: "#280948",
            color: "#fff",
            left: 0,
            overflow: "hidden",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}

        <List>
          {["Avatar", "Home", "Add", "More"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: 0 }}>
                {(() => {
                  switch (index) {
                    case 0:
                      return (
                        <Avatar
                          sx={{
                            margin: "10px 15px",
                            marginTop: 2,
                            width: 34,
                            height: 34,
                            color: "#751CCE",
                            backgroundColor: "#E5D6F4",
                          }}
                        />
                      );
                    case 1:
                      return (
                        <HomeIcon
                          sx={{
                            margin: "10px 15px",
                            color: "#E5D6F4",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      );
                    case 2:
                      return (
                        <div>
                          <GroupChatModal />
                          {/* <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem onClick={null}>Add User</MenuItem>
                            <MenuItem onClick={null}>Add Group</MenuItem>
                            <MenuItem onClick={null}>Create Group</MenuItem>
                          </Menu> */}
                        </div>
                      );
                    case 3:
                      return (
                        <div>
                          <Button
                            id="basic-button2"
                            aria-controls={open2 ? "basic-menu2" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? "true" : undefined}
                            onClick={handleClick2}
                            sx={{ left: "0px" }}
                          >
                            <MoreHorizIcon
                              sx={{
                                color: "#E5D6F4",
                                width: "30px",
                                height: "30px",
                              }}
                            />
                          </Button>
                          <Menu
                            id="basic-menu2"
                            anchorEl={anchorE2}
                            open={open2}
                            onClose={handleClose2}
                            MenuListProps={{
                              "aria-labelledby": "basic-button2",
                            }}
                          >
                            <MenuItem onClick={null}>
                              Change Background
                            </MenuItem>
                            <MenuItem onClick={null}>Switch Mode</MenuItem>
                            <MenuItem onClick={null}>Feedback</MenuItem>
                            <MenuItem onClick={null}>Help</MenuItem>
                          </Menu>
                        </div>
                      );
                    default:
                      return null;
                  }
                })()}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <IconButton
          sx={{ padding: "10px", marginBottom: "5px", marginTop: "auto" }}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/desktop-2");
          }}
        >
          <AccountCircleIcon
            sx={{
              color: "#E5D6F4",
              width: "30px",
              height: "30px",
            }}
          />
        </IconButton>
      </Drawer>
      <Drawer
        sx={{
          width: drawerWidth,
          left: 64,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#751CCE",
            color: "#fff",
            left: 64,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ py: 2.15 }}>
          <Paper
            component="form"
            sx={{
              p: "0.5px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              height: 40,
            }}
          >
            <IconButton
              sx={{ p: "5px", fontSize: "20px" }}
              aria-label="search"
              onClick={() => setOpen3(!open3)}
            >
              <SearchIcon />
              Search here
            </IconButton>
          </Paper>
          <Dialog open={open3} onClose={() => setOpen3(false)}>
            <DialogTitle>Search</DialogTitle>
            <DialogContent>
              <InputBase
                autoFocus
                fullWidth
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              {searchResults.length > 0 && (
                <List>
                  {searchResults.map((result) => (
                    <ListItem
                      key={result._id}
                      sx={{
                        backgroundColor: "#EDE4F5",
                        borderRadius: "10px",
                        margin: "5px 0",
                        padding: "5px 10px",
                        width: "300px",
                      }}
                      onClick={() => {
                        accessChat(result._id);
                      }}
                    >
                      <ListItemText
                        primary={result.name}
                        secondary={result.email}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen3(false)}>Cancel</Button>
              <Button onClick={handleSearch}>Search</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
        <Divider color="#EDE4F5" />
        <List sx={{ px: 2 }}>
          {chats.map((chat) => (
            <ListItem
              key={chat._id}
              sx={{
                backgroundColor:
                  chat._id === selectedChat._id ? "#280948" : "#751CCA",
                borderRadius: "10px",
                margin: "5px 0",
                padding: "5px 10px",
              }}
              onClick={() => {
                setSelectedChat(chat);
              }}
            >
              {!chat.isGroupChat
                ? getSender(loggedUser, chat.users)
                : chat.chatName}
              <ListItemText />
            </ListItem>
          ))}
        </List>
        <Divider color="#EDE4F5" />
        <List>
          {[].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#E5D6F4" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
      >
        {/* <Toolbar /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
            height: "100vh",
            bgcolor: "#EDE4F5",
            padding: 0,
            margin: 0,
          }}
        >
          <Toolbar
            sx={{
              position: "fixed",
              bottom: 2,
            }}
          >
            <InsertEmoticonIcon
              sx={{ color: "#751CCE", fontSize: "30px", margin: "0 5px" }}
            />
            <AttachFileIcon
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
      </Box>
    </Box>
  );
}
