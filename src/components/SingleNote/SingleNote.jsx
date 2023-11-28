import { useParams } from "react-router-dom";
import NoteItem from "../NoteItem/NoteItem";
import { mockNotes } from "../untils/mockNotes";

const SingleNotes = () => {
  const { noteId } = useParams();
  const mockNote = mockNotes.find((item) => item.id.toString() === noteId);

  console.log(noteId);
  return (
    <>
      <NoteItem note={mockNote} />
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
};
export default SingleNotes;
