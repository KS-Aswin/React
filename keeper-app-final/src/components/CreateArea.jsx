import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";
import "../App.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function click() {
    setIsClicked(true);
  }
  return (
    <div>
      <form className="create-note">
        {isClicked ? (
          <input
            className="formTitle"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          className="formContent"
          name="content"
          onChange={handleChange}
          onClick={click}
          value={note.content}
          placeholder="Take a note..."
          row={isClicked ? 3 : 1 }
        />
        <Zoom
          in={isClicked}
          style={{ display: isClicked ? "flex" : "none" }}
        >
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
