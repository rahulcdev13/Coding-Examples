import { useState } from "react";
const arr=["Apple", "Orange", "Banana"]
export default function App() {
  const [fruitsArr, setFruitsArr] = useState([...arr]);
  const [chkBoxStates, setChkBoxStates] = useState(arr.map(()=>false));

  const deleteClickHandler = (index) => {
    alert(index);
    const filteredArr = [];
    for (let i = 0; i < fruitsArr.length; i++) {
      if (i !== index) filteredArr.push(fruitsArr[i]);
    }
    setFruitsArr(filteredArr);
  };

  const handleCheck = (isChecked, index) => {
    setChkBoxStates((prevArray) => {
      const newArray = [...prevArray]; // create a new array based on the previous state array
      newArray[index] = isChecked; // modify the element at the specified index
      return newArray; // return the new array as the updated state value
    });
  };
  return (
    <div className="App">
      <h2>List Items</h2>
      {fruitsArr.map((element, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              onChange={(e) => handleCheck(e.target.checked, index)}
            ></input>
            {element} {chkBoxStates[index] && (<button onClick={() => deleteClickHandler(index)}>Delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
}