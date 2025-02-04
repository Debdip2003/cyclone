import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Location from "../pages/Location";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Error from "../pages/Error";

// Define routes for the app.
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default routes;
