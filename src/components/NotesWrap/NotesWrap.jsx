import s from "./NotesWrap.module.css"

const NotesWrap = ({ children }) => {
  return <div className={s.wrap}>{children}</div>;
};
export default NotesWrap;
