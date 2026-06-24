import { createBrowserRouter } from "react-router-dom";
import AsmaulHusna from "../pages/AsmaulHusna";
import About from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import Welcome from "../pages/Welcome";

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
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
