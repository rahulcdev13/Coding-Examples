import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [apiData, setApiData] = useState([]);

  const getAPIData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setApiData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(apiData);
  useEffect(() => {
    getAPIData();
  }, []);

  const handleDelete = (index) => {
    let newdata = apiData.filter((item, ind) => {
      return ind !== index;
    });
    setApiData(newdata);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData &&
            apiData.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      {apiData.map((item, index) => (
        <li>
          {item.brand}{" "}
          <button onClick={() => handleDelete(index)}>delete</button>
        </li>
      ))}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
