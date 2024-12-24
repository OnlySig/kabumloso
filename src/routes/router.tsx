import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../pages/LayoutBase";
import Home from "../pages/home";
import Product from "../pages/Product";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "produto/:slug",
        element: <Product />,
      },
    ],
  },
]);
