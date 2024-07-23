import "../App.css";

function List(props) {
  return (
    <>
      <li
        onClick={() => {
          props.isClicked(props.id);
        }}
      >
        {props.listItems}
      </li>
    </>
  );
}

export default List;
