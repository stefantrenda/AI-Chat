import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DashboardPage from "../routes/dashboardPage/DashboardPage";
import HomePage from "../routes/homePage/Homepage";
import ChatPage from "../routes/chatPage/ChatPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./layouts/rootLayouts/RootLayous";
import dashboardLayout from "./dashboardLayout/DashboardLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <dashboardLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />
          },
          {
            path: "dashboard/chats/:id",
            element: <ChatPage />
          },

        ]
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
