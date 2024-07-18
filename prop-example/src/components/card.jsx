import "../App.css";

function Card(props) {
  return (
    <>
      <div className="cardValues">
        <div className="img">
          <img src={props.img} alt="Images" />
        </div>
        <div className="cardDetails">
          <h3>{props.name}</h3>
          <p>Id : {props.id}</p>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
