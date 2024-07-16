import "../App.css";
import Card from "./card";
import contactDetails from "./contacts";

function App() {
  return (
    <>
      <h1 className="contactHeading">Contact Details</h1>
      <div className="cards">
      {contactDetails.map((contact, index) => (
          <Card
            key={index}
            name={contact.name}
            img={contact.img}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    </>
  );
}

export default App;
