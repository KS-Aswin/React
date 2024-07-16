import "../App.css";

function Card({ name, img, phone, email }) {
  return (
    <>
      <div className="cardValues">
        <div className="img">
          <img src={img} alt="Images" />
        </div>
        <div className="cardDetails">
          <h3>{name}</h3>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
