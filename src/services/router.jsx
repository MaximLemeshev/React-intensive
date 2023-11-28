import { createBrowserRouter, redirect } from "react-router-dom";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import PublicNotes from "../components/PablicNotes/PablicNotes";
import PersonalNotes from "../components/PersonalNotes/PersonalNotes";
import PasswordChanger from "../components/PasswordChanger/PasswordChanger";
import SingleNotes from "../components/SingleNote/SingleNote";

export const router = createBrowserRouter([
  {
    path: "/",
    loader() {
      return redirect("/login");
    },
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/public",
    element: <PublicNotes />,
  },
  {
    path: "/personal",
    element: <PersonalNotes />,
  },
  {
    path: "/changePassword",
    element: <PasswordChanger />,
  },
  {
    path: "/note/:noteId",
    element: <SingleNotes />,
  },
]);
