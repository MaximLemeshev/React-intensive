import { createPortal } from "react-dom";
import s from "./ModalDelete.module.css";

const ModalDelete = ({ isOpen, onClose, onConfirm, title }) => {
  if (!isOpen) return null;

  return (
    <div>
      {createPortal(
        <div className={s.modal_overlay}>
          <div className={s.modal}>
            <p>Are you sure you want to delete this note?</p>
            <p>{title}</p>
            <div className={s.btnBlock}>
              <button onClick={onClose}>Cancel</button>
              <button onClick={onConfirm}>Confirm</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
export default ModalDelete;
