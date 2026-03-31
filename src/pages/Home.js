import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello, I'm Sultan</h1>
      <p>I am a CSE student learning React and DSA 🚀</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;