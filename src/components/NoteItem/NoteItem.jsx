import s from "./NoteItem.module.css";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";

const NoteItem = ({ note, personal }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleConfirmDelete = () => {
    console.log("Confirmed");
  };
  return (
    <div className={s.card}>
      <div className={s.title}>{note.title}</div>
      <div>Author: {note.owner}</div>
      <div>{note.text}</div>
      <div className={s.tags_block}>
        Tags:
        {note.tags.map((tag, i) => (
          <div key={i} className={s.tags_item}>
            {tag}
          </div>
        ))}
      </div>
      {personal === true ? (
        <>
          <button className={s.deleteBtn} onClick={handleDeleteClick}>
            Delete
          </button>
          <ModalDelete
            isOpen={showModal}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
          />
        </>
      ) : (
        <div className={s.favoriteBtn}>
          <button>Add favorite</button>
          <button>Remove from favorites</button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
