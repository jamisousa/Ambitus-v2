import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import { ThemeProvider } from "./utils/contexts/globalThemeContext.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import { DashContentProvider } from "./utils/contexts/dashboardAction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/introduction",
    element: <IntroductionPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <DashContentProvider>
        <RouterProvider router={router} />
      </DashContentProvider>
    </ThemeProvider>
  </React.StrictMode>
);
