import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h1>Hello, I'm Sultan</h1>

      {/* About Section (LEFT aligned) */}
      <p>
        I am a dedicated Computer Science and Engineering student with a deep
        passion for programming, problem-solving, and building practical,
        real-world solutions using technology.
      </p>

      <p>
        I enjoy exploring how things work behind the scenes and turning ideas
        into meaningful digital experiences through clean and efficient code.
      </p>

      <p>
        My goal is to grow as a skilled software engineer who can design
        efficient solutions, write clean and maintainable code, and contribute
        positively to impactful projects.
      </p>

      {/* Button CENTERED */}
      <div className="center-box">
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>
    </div>
  );
}

export default Home;