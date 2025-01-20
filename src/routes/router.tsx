import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../pages/LayoutBase";
import Home from "../pages/home";
import Product from "../pages/Product";
import Categoria from "../pages/Search/Categoria";
import SearchLayout from "../pages/Search/SearchLayout";

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
      {
        path: "search",
        element: <SearchLayout />,
        children: [
          {
            path: "tag/:categoria",
            element: <Categoria />,
          },
          {
            path: "q/:pesquisa",
            element: <Categoria />,
          },
        ],
      },
    ],
  },
]);
