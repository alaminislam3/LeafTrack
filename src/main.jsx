import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Page/Home.jsx";
import AllPlant from "./Page/AllPlant.jsx";
import AddPlant from "./Page/AddPlant.jsx";
import MyPlant from "./Page/MyPlant.jsx";
import Login from "./Page/Login.jsx";
import Registration from "./Page/Registration.jsx";
import AuthProvider from "./Layout/Context/AuthProvider.jsx";
import Error from "./Page/Error.jsx";
import ViewDetails from "./Page/ViewDetails.jsx";
import Loading from "./Components/Loading.jsx";
import Updatepage from "./Page/Updatepage.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/allplant", Component: AllPlant },

      {
        path: "/addplant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "/myplant",
        element: (
          <PrivateRoute>
            {" "}
            <MyPlant></MyPlant>{" "}
          </PrivateRoute>
        ),
      },

      { path: "/login", Component: Login },
      { path: "/update/:id", Component: Updatepage },
      { path: "/registration", Component: Registration },
      { path: "*", Component: Error },
      {
        path: "/allplant/:id",
        loader: ({ params }) =>
          fetch(`https://leaf-track-server.vercel.app/addplant/${params.id}`),
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
