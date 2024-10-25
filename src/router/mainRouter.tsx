import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import GoalLayout from "../layout/GoalLayout";
import GoalScreen from "../pages/GoalScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <GoalLayout />,
    children: [
      {
        index: true,
        element: <GoalScreen />,
      },
    ],
  },
]);
