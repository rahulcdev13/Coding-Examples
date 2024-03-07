// how to store firsname and last name in array and show in react

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addPerson = () => {
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      const newPerson = { firstName, lastName };
      setPeople([...people, newPerson]);
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={addPerson}>Add Person</button>
      </div>

      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
