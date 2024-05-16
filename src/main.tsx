import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, Experience } from "./pages";

const router = createBrowserRouter([
  {
    path: "/thomascionek/",
    element: <App />,
    children: [
      {
        path: "/thomascionek/",
        element: <Home />,
      },
      {
        path: "/thomascionek/about",
        element: <About />,
      },
      {
        path: "/thomascionek/contact",
        element: <Contact />,
      },
      {
        path: "/thomascionek/experience",
        element: <Experience />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
