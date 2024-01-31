import React from "react";
import HomePage from "./Pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DishDetails from "./Pages/DishDetails";
import "./App.css";
import AllDish from "./Pages/AllDish";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/all_dish",
      element: <AllDish />,
    },
    {
      path: "/dish_details",
      element: <DishDetails />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
