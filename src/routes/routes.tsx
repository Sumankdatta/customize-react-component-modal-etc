import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>This admin dashboard</h1>,
      },
      {
        path: "add-admin",
        element: <h1>This is add admin</h1>,
      },
      {
        path: "add-adm",
        element: <h1>Oh god help me i need your help</h1>,
      },
    ],
  },
]);

export default router;