import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LangControl from "./components/LangControl/LangControl";
// import { MyContext } from "./context/LocalizationContext";
// import ru from "./localization/ru";
// import en from "./localization/en";

// import { useState } from "react";
import { LocalizationProvider } from "./context/LocalizationContext";
// import PersonalNotes from "./components/PersonalNotes/PersonalNotes";
// import PablicNotes from "./components/PablicNotes/PablicNotes";

function App() {
  // const [locale, setLocale] = useState("en");
  // const messages = { en, ru };

  // const changeLocale = (newLocale) => {
  //   setLocale(newLocale);
  // };

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
