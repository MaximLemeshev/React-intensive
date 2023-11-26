import { createPortal } from "react-dom";
import s from "./ModalNewNote.module.css";
import { useState } from "react";

const ModalNewNote = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [color, setColor] = useState("#ffffff"); // Default color is white
  if (!isOpen) return null;

  return (
    <div>
      {createPortal(
        <div className={s.modal_overlay}>
          <div className={s.modal}>
            <p>Create</p>
            <div className={s.block}>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={s.block}>
              <label>Text:</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className={s.block}>
              <label>Tags (comma separated):</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <div className={s.choosePrivat}>
              <label>
                Make public
                <input
                  className={s.inputPrivateCheck}
                  type="checkbox"
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                />
              </label>
            </div>
            <div className={s.block}>
              <label>Color:</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className={s.blockBtn}>
              <button onClick={onClose}>Cancel</button>
              <button onClick={() => console.log("saved")}>Save</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
export default ModalNewNote;
