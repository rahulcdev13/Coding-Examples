import { useState } from "react";

const arr = ["play cricket", "play football", "play carrom", "play rubix cube"];
export default function App() {
  const [list, setlist] = useState(arr);
  const [checked,setChecked] = useState(false)

  const deleteItem = (Itemindex) => {
    // const updateddata = [...list];
    // updateddata.splice(index, 1);
    let newArr = list;
    let filteredData = newArr.filter((item, index)=>{
      return index!==Itemindex
    }
    ) 
    setlist(filteredData);
  };
 
  return (
    <div className="App">
      <h1>List Items</h1>
      {list.map((item, index) => {
        return (
          <>
            <li>
              {item}{" "}
              <button onClick={() => deleteItem(index)} >X</button>
            </li>
          </>
        );
      })}
    </div>
  );
}
