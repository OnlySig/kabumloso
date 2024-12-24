import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../pages/LayoutBase";
import Home from "../pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
