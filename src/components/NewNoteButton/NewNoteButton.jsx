import s from "./NewNoteButton.module.css";
import ModalNewNote from "../ModalNewNote/ModalNewNote";
import { useState } from "react";
const NewNoteButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCreateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    console.log("Nothing happend");
  };
  return (
    <>
      <button className={s.add_button} onClick={handleCreateClick}>
        Add new note
      </button>
      <ModalNewNote
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default NewNoteButton;
