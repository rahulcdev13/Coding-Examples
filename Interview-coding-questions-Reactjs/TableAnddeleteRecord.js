import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setdata] = useState([
    { id: 1, fname: "Rahul", lname: "Chavan" },
    { id: 2, fname: "Rahul", lname: "Chavan" },
    { id: 3, fname: "Rahul", lname: "Chavan" },
    { id: 4, fname: "Rahul", lname: "Chavan" },
    { id: 5, fname: "Rahul", lname: "Chavan" },
    { id: 6, fname: "Rahul", lname: "Chavan" }
  ]);
  console.log(data);

  const handlerDelete = (id) => {
    // alert(id);
    const newData = data.filter((data) => data.id !== id);
    setdata(newData);
  };

  return (
    <div className="App">
      <h1>Coding Quetions </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Oprations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((showData, ind) => {
            return (
              <React.Fragment>
                <tr key={ind}>
                  <td>{showData.id}</td>
                  <td>{showData.fname}</td>
                  <td>{showData.lname}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handlerDelete(showData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
