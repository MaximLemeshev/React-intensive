import "./App.css";
import { LocalizationProvider } from "./context/LocalizationContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";

function App() {
  return (
    <>
      <LocalizationProvider>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </>
  );
}

export default App;
