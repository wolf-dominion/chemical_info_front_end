import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const dataURL = "https://sheet.best/api/sheets/955ad1a5-948c-49c5-81f0-2f832fb1efbb"
  const userURL = 'https://api.randomuser.me/'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch(dataURL)
        .then(res => {
          if(res.ok) {
            return res.json();
          } else {
            throw Error("Error during fetch call")
          }
        })
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(error => {
          setError(error)
        })
    }, []);

return (
    <div id="site-container">
      <h1>Chemical Information Site</h1>
      {/* <button onClick={() => setData([...data, 'new element'])}>
        Click me
      </button> */}
      {/* {loading ? <div>...Loading</div> : <div>{data.name.first}</div>} */}
    </div>
  );
}

export default App;
