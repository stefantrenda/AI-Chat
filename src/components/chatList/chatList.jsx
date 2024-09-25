import "./chatlist.css";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Steph AI</Link>
      <Link to="/">Explore Steph AI</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
        <Link to="/">My Chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro</span>
          <span>Get unlimited accesss to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
