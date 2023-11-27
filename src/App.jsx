import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LangControl from "./components/LangControl/LangControl";
import { LocalizationProvider } from "./context/LocalizationContext";
// import PersonalNotes from "./components/PersonalNotes/PersonalNotes";
// import PablicNotes from "./components/PablicNotes/PablicNotes";

function App() {
  return (
    <>
      <LocalizationProvider>
        <LangControl />
        <LoginScreen />
      </LocalizationProvider>
      {/* <PersonalNotes /> */}
      {/* <PablicNotes /> */}
    </>
  );
}

export default App;
