import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello, I'm Sultan</h1>
      <p>I am a dedicated Computer Science and Engineering student with a deep passion for programming, problem-solving, and building practical, real-world solutions using technology. I enjoy exploring how things work behind the scenes and turning ideas into meaningful digital experiences through clean and efficient code.</p>
      <p>I have a strong interest in logical thinking and analytical problem-solving, which I continuously improve by practicing data structures, algorithms, and core programming concepts. I believe that consistency and hands-on learning are the keys to growth, so I actively apply what I learn through projects, experiments, and continuous practice.</p>
      <p>My goal is to grow as a skilled software engineer who can design efficient solutions, write clean and maintainable code, and contribute positively to impactful projects. I am always eager to learn, improve, and take on new challenges that help me evolve both personally and professionally.</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;