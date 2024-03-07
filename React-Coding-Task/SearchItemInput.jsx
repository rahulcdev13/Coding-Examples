import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [filter, setFilter] = useState("");
  const listItem = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];
  const [apiData, setApiData] = useState(listItem);

  const handleSearhcFilter = (e) => {
    setFilter(e.target.value);
    setApiData(listItem.filter((item) => item.includes(e.target.value)));
  };

  return (
    <div className="App">
      <input type="test" value={filter} onChange={handleSearhcFilter} />
      {apiData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
