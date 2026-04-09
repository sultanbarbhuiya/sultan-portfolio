import { useEffect, useState } from "react";

function Skills() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="page">
      <h1>Skills</h1>

      {/* Skills badges */}
      <div className="skill-list">
        <div className="skill-badge">C</div>
        <div className="skill-badge">C++</div>
        <div className="skill-badge">Python</div>
        <div className="skill-badge">DSA</div>
        <div className="skill-badge">OOPS</div>
        <div className="skill-badge">HTML</div>
        <div className="skill-badge">CSS</div>
        <div className="skill-badge">JavaScript</div>
      </div>

      <h2>Users from API</h2>

      <div className="user-list">
        {users.map(user => (
          <div className="user-item" key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;