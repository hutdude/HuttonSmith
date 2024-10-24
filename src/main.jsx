import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Landing from "./routes/landing";
import Lily from "./routes/lily";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Landing />,
   },
   {
    path: "/forlilyseyesonly",
    element: <Lily />
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
