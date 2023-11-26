import NoteList from "../NoteList/NoteList";
import NotesWrap from "../NotesWrap/NotesWrap";
import { mockNotes } from "../untils/mockNotes";
import s from "./PablicNotes.module.css";

const PablicNotes = () => {
  return (
    <>
      <NotesWrap>
        <div className={s.title}>Pablic notes</div>
        <NoteList notes={mockNotes} personal={false} />
      </NotesWrap>
    </>
  );
};

export default PablicNotes;
