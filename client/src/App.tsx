// import { BackendService } from "@genezio-sdk/test_eu-central-1";
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./views/Home.view.tsx";
export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ])

  return (
      <RouterProvider router={router}/>
  );
}
