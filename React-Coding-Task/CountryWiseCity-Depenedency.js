import "./styles.css";
import { useState } from "react";

const countryArrays = [
  {
    country: "India",
    value: "In",
    cities: ["Telangana", "AndhraPradesh", "Rajasthan", "Maharashtra"]
  },
  {
    country: "Pakistan",
    value: "Pak",
    cities: ["Pak-One", "Pak-Two", "Pak-Three"]
  }
];

export default function App() {
  const [array] = useState(countryArrays);
  const [state, setState] = useState([]);

  const changeStates = (e) => {
    const filtered = array.filter((item) => item.value === e);
    setState(filtered[0].cities);
    console.log(state);
  };

  return (
    <div className="App">
      <select onChange={(e) => changeStates(e.target.value)}>
        {array.map((item, index) => (
          <option value={item.value}>{item.country}</option>
        ))}
      </select>
      <select>
        {state.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
// ============================================================================================
import "./styles.css";
import { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [country, setCountry] = useState(countries[0]);

  return (
    <>
      <select
        value={country.name}
        onChange={(e) => {
          setCountry(
            countries[countries.findIndex((i) => i.name === e.target.value)]
          );
        }}
      >
        {countries.map((item, index) => {
          return <option key={index}>{item.name}</option>;
        })}
      </select>
      <select>
        {country.cities.map((i, index) => (
          <option key={index}>{i}</option>
        ))}
      </select>
    </>
  );
}
