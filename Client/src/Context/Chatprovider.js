import { createContext, useContext, useEffect, useState } from "react";
const ChatContext = createContext();
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    } else {
      setUser(null);
      navigate("/desktop-2");
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};
// useContext(ChatContext);

export default ChatProvider;
