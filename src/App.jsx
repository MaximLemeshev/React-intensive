import "./App.css";
// import LoginScreen from "./components/LoginScreen/LoginScreen";
// import LangControl from "./components/LangControl/LangControl";
import { LocalizationProvider } from "./context/LocalizationContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
// import PersonalNotes from "./components/PersonalNotes/PersonalNotes";
// import PablicNotes from "./components/PablicNotes/PablicNotes";

function App() {
  return (
    <>
      <LocalizationProvider>
        <RouterProvider router={router} />
        {/* 
        <LoginScreen /> */}
      </LocalizationProvider>
      {/* <PersonalNotes /> */}
      {/* <PablicNotes /> */}
    </>
  );
}

export default App;
