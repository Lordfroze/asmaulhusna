import { createBrowserRouter } from "react-router-dom";
import AsmaulHusna from "../pages/AsmaulHusna";
import About from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import Welcome from "../pages/Welcome";
import AsmaulHusnaApi from "../apis/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/asmaulhusna",
        element: <AsmaulHusna />,
        loader: AsmaulHusnaApi,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
