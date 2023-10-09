import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import { ThemeProvider } from './utils/contexts/globalThemeContext.tsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.tsx';
import IntroductionPage from './pages/IntroductionPage/IntroductionPage.tsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
