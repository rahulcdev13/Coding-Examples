import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");

  const [show, setShow] = useState([]);

  const filterAge = () => {
    const ageFilterData = show.filter((item) => item.age > 27);
    setShow(ageFilterData);
  };
  const handleSubmit = () => {
    if (fname.trim() !== "" && lname.trim() !== "") {
      const fdata = { fname, lname, age };
      setShow([...show, fdata]);
      setFname("");
      setLname("");
    } else {
      alert("please enter value..");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = [...show]; // Create a copy of the original array
    updatedItems.splice(id, 1); // Remove the item at the specified index
    setShow(updatedItems); // Update the state with the new array
  };
  return (
    <div className="App">
      <input
        type="fname"
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="lname"
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
      <ul>
        {show.map((item, id) => (
          <li key={id}>
            {item.fname} {item.lname} :{item.age}
            <button onClick={() => deleteItem(id)}> Delete </button>
          </li>
        ))}
      </ul>
      <button onClick={filterAge}>FilterAge</button>
    </div>
  );
}
