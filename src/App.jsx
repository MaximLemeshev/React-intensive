import "./App.css";
import { LocalizationProvider } from "./context/LocalizationContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import { useState } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <LocalizationProvider>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
