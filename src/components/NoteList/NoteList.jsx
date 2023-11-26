import NoteItem from "../NoteItem/NoteItem";

const NoteList = ({ notes, personal }) => {
  return (
    <div>
      {notes.map((notes) => (
        <NoteItem key={notes.id} note={notes} personal={personal} />
      ))}
    </div>
  );
};

export default NoteList;
