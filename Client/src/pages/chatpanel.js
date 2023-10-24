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

const drawerWidth = 240;

export default function Chatpanel() {
  const users = ["User1", "User2", "User3", "User4", "User5"];
  const groups = ["Group1", "Group2", "Group3", "Group4", "Group5"];
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
            Username
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
              <ListItemButton>
                <ListItemIcon sx={{ color: "#E5D6F4", marginRight: 1 }}>
                  {(() => {
                    switch (index) {
                      case 0:
                        return (
                          <Avatar
                            sx={{
                              margin: "auto 0px",
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
                              color: "#E5D6F4",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        );
                      case 2:
                        return (
                          <AddIcon
                            sx={{
                              color: "#E5D6F4",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        );
                      case 3:
                        return (
                          <MoreHorizIcon
                            sx={{
                              color: "#E5D6F4",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        );
                      default:
                        return null;
                    }
                  })()}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <IconButton
          sx={{ padding: "10px", marginBottom: "5px", marginTop: "auto" }}
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
        <Toolbar>
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
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
        </Toolbar>
        <Divider color="#EDE4F5" />
        <List>
          {users.map((name) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <Avatar />
                <ListItemText primary={name} sx={{ margin: "0 20px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider color="#EDE4F5" />
        <List>
          {groups.map((text, index) => (
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
        <Toolbar />
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
