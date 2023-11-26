import NewNoteButton from "../NewNoteButton/NewNoteButton";
import NoteList from "../NoteList/NoteList";
import NotesWrap from "../NotesWrap/NotesWrap";
import { mockNotes } from "../untils/mockNotes";
import s from "./PersonalNotes.module.css";

const PersonalNotes = () => {
  return (
    <>
      <NotesWrap>
        <div className={s.title}>Personal notes</div>
        <NewNoteButton />
        <NoteList notes={mockNotes} personal={true} />
      </NotesWrap>
    </>
  );
};

export default PersonalNotes;
