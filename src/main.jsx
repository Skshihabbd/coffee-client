import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Errorpage/Error.jsx";
import Addcoffe from "./components/addcoffe/Addcoffe.jsx";
import Updatecoffe from "./components/updatecoffe/Updatecoffe.jsx";
import Home from "./components/home/Home.jsx";
import CoffeCard from "./components/coffecard/CoffeCard.jsx";
import Signin from "./components/signin/Signin.jsx";
import Signup from "./components/signup/Signup.jsx";
import AuthProvider from "./components/context/AuthProvider.jsx";
import UserData from "./components/userData/UserData.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/addcoffee",
        element: <Addcoffe></Addcoffe>,
      },
      {
        path: "/updatecoffee/:id",
        element: <Updatecoffe></Updatecoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5003/coffee/${params.id}`),
      },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5003/coffee"),
      },
      { path: "/coffeecard", element: <CoffeCard></CoffeCard> },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/user",
        element: <UserData></UserData>,
        loader: () => fetch("http://localhost:5003/user"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
