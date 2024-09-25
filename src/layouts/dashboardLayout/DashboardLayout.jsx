import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChatList from "../../components/chatList/chatList";
import "./dashboardLayout.css";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigator = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigator("/sign-in");
    }
  }, [navigator, isLoaded, userId]);

  if (!isLoaded) return "Loading ....";

  return (
    <div>
      <div className="menu">
        <ChatList />
      </div>
      <div className="contat">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
