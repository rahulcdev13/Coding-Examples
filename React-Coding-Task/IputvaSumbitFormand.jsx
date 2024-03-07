import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [persondata, setPersondata] = useState([]);
  const [fname, setFname] = useState("");
  const [lanem, setLast] = useState("");

  const handleSumbit = () => {
    if (fname.trim() !== "" && lanem.trim() !== "") {
      const data = { fname, lanem };
      setPersondata([...persondata, data]);
      setFname("");
      setLast("");
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="text"
        value={lanem}
        onChange={(e) => setLast(e.target.value)}
      />
      <button onClick={handleSumbit}>Submit</button>
      <h2>Start editing to see some magic happen!</h2>
      {persondata &&
        persondata.map((item, ind) => (
          <p key={ind}>
            {item.fname} {item.lanem}
          </p>
        ))}
    </div>
  );
}
