import { useState } from "react";
import "./App.css";
import AsmaulHusna from "./pages/AsmaulHusna";
import { GlobalContext } from "./context/index";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index";

function App() {
  return (
    <div className="App">
      <GlobalContext.Provider value={{}}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
