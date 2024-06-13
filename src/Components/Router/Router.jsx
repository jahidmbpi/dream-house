import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Login/LogIn";
import Register from "../Register/Register";

import PrivateRoute from "../../privateRoute/PrivateRoute";
import ViweDetails from "../ViweDetails/ViweDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
        loader: () => fetch("/cetagorise.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/cetagorise/:id",
        element: <ViweDetails></ViweDetails>,
        loader: () => fetch("/cetagorise.json"),
      },
    ],
  },
]);
