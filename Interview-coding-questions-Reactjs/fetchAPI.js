import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);

  let myAPI = `https://hub.dummyapis.com/employee`;

  useEffect(() => {
    async function fetchAPI() {
      fetch(myAPI)
        .then((res) => res.json())
        .then((res) => setUser(res))
        .catch((err) => console.log(err));
    }
    fetchAPI();
  }, []);

  // console.log(user);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {user.map((data, i) => {
        return (
          <>
            <p key={i}>{data.firstName}</p>
          </>
        );
      })}
    </div>
  );
}


