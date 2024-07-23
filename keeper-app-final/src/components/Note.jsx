import DeleteIcon from '@mui/icons-material/Delete';
import "../App.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <>
      <div className="note">
        <div className="noteTitle">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        <div >
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
      </div>
    </>
  );
}

export default Note;
