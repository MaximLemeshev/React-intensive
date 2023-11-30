import s from "./NoteItem.module.css";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ note, personal }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleShowMore = () => navigate(`/note/${note.id}`);

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
          <button className={s.showMoreBtn} onClick={handleShowMore}>
            Show more
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
          <button className={s.showMoreBtn} onClick={handleShowMore}>
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
