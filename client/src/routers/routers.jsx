import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Cart } from "../pages/bags/Cart";
import { Checkout } from "../pages/bags/Checkout";
import { SingleBag } from "../pages/bags/SingleBag";
import PrivateRoutes from "./PrivateRoutes";
import Orders from "../pages/bags/Orders";
import AdminRoutes from "./AdminRoutes";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageItem from "../pages/dashboard/ManageItem";
import AddBag from "../pages/dashboard/addBag/AddBag";
import EditBag from "../pages/dashboard/editBag/EditBag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: "/bags/:id",
        element: <SingleBag />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoutes>
        <DashboardLayout />
      </AdminRoutes>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoutes>
            <Dashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "add-bag",
        element: (
          <AdminRoutes>
            <AddBag />
          </AdminRoutes>
        ),
      },
      {
        path: "edit-bag/:id",
        element: (
          <AdminRoutes>
            <EditBag />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-bags",
        element: (
          <AdminRoutes>
            <ManageItem />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
