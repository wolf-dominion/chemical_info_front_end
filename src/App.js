import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

return (
    <div id="site-container">
      <h1>Chemical Information Site</h1>
      <p>You clicked {count} times</p>
      <p>isTrue is set to {isTrue == true ? "true" : "false"}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
