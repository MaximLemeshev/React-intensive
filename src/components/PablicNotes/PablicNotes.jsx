import NoteList from "../NoteList/NoteList";
import NotesWrap from "../NotesWrap/NotesWrap";
import { mockNotes } from "../untils/mockNotes";
import s from "./PablicNotes.module.css";
import { Link } from "react-router-dom";

const PablicNotes = () => {
  return (
    <>
      <NotesWrap>
        <div className={s.title}>Pablic notes</div>
        <Link to="/changePassword">
          <button>Change password</button>
        </Link>
        <Link to="/personal">
          <button>Personal notes</button>
        </Link>
        <NoteList notes={mockNotes} personal={false} />
      </NotesWrap>
    </>
  );
};

export default PablicNotes;
