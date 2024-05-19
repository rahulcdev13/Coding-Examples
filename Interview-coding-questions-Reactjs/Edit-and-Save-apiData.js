import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [titleVal, setTitleVal] = useState('');

  // Fetch API data
  const getApiData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await response.json();
    setApiData(res);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleEdit = (index, currentTitle) => {
    setEditIndex(index);
    setTitleVal(currentTitle);
  };

  const handleSave = (index) => {
    const updatedData = [...apiData];
    updatedData[index].title = titleVal;
    setApiData(updatedData);
    setEditIndex(null);
  };

  return (
    <div>
      <h1>Editable Posts</h1>
      {apiData.map((item, index) => (
        <div
          key={item.id}
          style={{
            border: '1px solid red',
            height: '100px',
            width: '200px',
            marginBottom: '10px',
            padding: '10px',
          }}
        >
          {editIndex === index ? (
            <input
              type="text"
              value={titleVal}
              onChange={(e) => setTitleVal(e.target.value)}
            />
          ) : (
            <span>{item.title}</span>
          )}
          {editIndex === index ? (
            <button onClick={() => handleSave(index)}>Save</button>
          ) : (
            <button onClick={() => handleEdit(index, item.title)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
}
