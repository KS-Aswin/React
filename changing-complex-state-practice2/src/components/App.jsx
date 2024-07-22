import { useState } from "react";
import "../App.css";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function getContact(event) {
    const { value, name } = event.target;
    setContact((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
          <input
            name="fName"
            onChange={getContact}
            placeholder="First Name"
            value={contact.fName}
          />
          <input
            name="lName"
            onChange={getContact}
            placeholder="Last Name"
            value={contact.lName}
          />
          <input
            name="email"
            onChange={getContact}
            placeholder="Email"
            value={contact.email}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
