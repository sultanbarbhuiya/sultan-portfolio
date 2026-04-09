import { useEffect, useState } from "react";

function Skills() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Skills</h1>
      <ul>
        <li>C, C++, Python</li>
        <li>DSA and OOPS</li>
        <li>HTML, CSS and basic Javascript</li>
      </ul>

      <h2>Users from API</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Skills;