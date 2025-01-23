import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../pages/LayoutBase";
import Home from "../pages/home";
import Product from "../pages/Product";
import Categoria from "../pages/Search/Categoria";
import SearchLayout from "../pages/Search/SearchLayout";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Dashboard from "../pages/admin/Dashboard";
import UpsertForm from "../pages/admin/UpsertForm";
import NotFound from "../pages/not-found";
import LayoutAccount from "../pages/account/LayoutAccount";
import CreateAccount from "../pages/account/CreateAccount";
import Login from "../pages/account/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    errorElement: <NotFound />,
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
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "upsert/:id",
        element: <UpsertForm />,
      },
      {
        path: "upsert",
        element: <UpsertForm />,
      },
    ],
  },
  {
    path: "account",
    element: <LayoutAccount />,
    children: [
      {
        path: "create-account",
        element: <CreateAccount />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
