import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LangControl from "./components/LangControl/LangControl";
import { MyContext } from "../src/MyContext/MyContext";
import ru from "../src/MyContext/ru";
import en from "../src/MyContext/en";
import { useState } from "react";
// import PersonalNotes from "./components/PersonalNotes/PersonalNotes";
// import PablicNotes from "./components/PablicNotes/PablicNotes";

function App() {
  const [locale, setLocale] = useState("en");
  const messages = { en, ru };

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <>
      <MyContext.Provider value={{ locale, messages, changeLocale }}>
        <LangControl />
        <LoginScreen />
      </MyContext.Provider>
      {/* <PersonalNotes /> */}
      {/* <PablicNotes /> */}
    </>
  );
}

export default App;
