import NewNoteButton from "../NewNoteButton/NewNoteButton";
import NoteList from "../NoteList/NoteList";
import NotesWrap from "../NotesWrap/NotesWrap";
import { mockNotes } from "../untils/mockNotes";
import s from "./PersonalNotes.module.css";
import { Link } from "react-router-dom";

const PersonalNotes = () => {
  return (
    <>
      <NotesWrap>
        <div className={s.title}>Personal notes</div>
        <Link to="/changePassword">
          <button>Change password</button>
        </Link>
        <Link to="/public">
          <button>Pablic notes</button>
        </Link>
        <NewNoteButton />
        <NoteList notes={mockNotes} personal={true} />
      </NotesWrap>
    </>
  );
};

export default PersonalNotes;
