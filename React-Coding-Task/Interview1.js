import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState('');
  // const refs = useRef();

  const handlesumbit = (e) => {
    if (todo.trim() !== '') {
      setTodolist([...todolist, todo]);
      setTodo('');
    }
  };
  console.log(todolist);

  const DeleteItem = (inded) => {
    const finalRes = todolist;
    const result = finalRes.filter((item, ind) => {
      return inded !== ind;
    });
    setTodolist(result);
  };
  return (
    <div>
      <h1>Hello StackBlitz</h1>
      <input
        // refs={todo}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handlesumbit}>submit</button>

      {todolist.map((itemList, ind) => {
        return (
          <>
            <li>
              {itemList} -{' '}
              <button onClick={() => DeleteItem(ind)}>delete</button>
            </li>
          </>
        );
      })}

      <p>Welcome to the component page</p>
    </div>
  );
}
