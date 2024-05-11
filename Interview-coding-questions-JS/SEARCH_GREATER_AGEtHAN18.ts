import { useState } from "react";
import "./styles.css";

const ERR_MSG = "Age Should be greter than 18.";
export default function App() {
  const [personage, setPersonAge] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const handleInputval = (event) => {
    setErrMsg(false);
    setPersonAge(event.target.value);
    if (event.target.value < 18) {
      setErrMsg(true);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={personage} onChange={handleInputval} />
      <p> {errMsg ? ERR_MSG : null}</p>
    </div>
  );
}
