import "./styles.css";
import { useEffect, useState } from "react";

// * 1. Create a reusable card-like component that displays identityData
// * 2. GET data from this https://mocki.io/v1/50abfd24-2845-4dd7-bcce-9bd732e25c47 API when the component loads and use the card containers to display the data in the UI.
// * 3. Hide all containers which data does not contain the "type" attribute

export default function App() {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const data = await fetch(
      "https://mocki.io/v1/50abfd24-2845-4dd7-bcce-9bd732e25c47"
    );
    const json = await data.json();
    const ressult = json.list;
    console.log(ressult);
    setData(ressult);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div className="MainConatiner">
        {data.map((item) => {
          return (
            <>
              <div className="card">
                <p>
                  {item.name} : {item.number}
                  <p>{item.type}</p>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
