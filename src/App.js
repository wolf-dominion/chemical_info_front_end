import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  //const dataURL = "https://sheet.best/api/sheets/955ad1a5-948c-49c5-81f0-2f832fb1efbb"
  //const [data, setData] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    
    useEffect(async () => {
      const response = await fetch('https://api.randomuser.me/');
      const info = await response.json();
      const item = info.results[0];
      setData(item);
      console.log(info.results[0].name.first)
      setLoading(false);
    }, [data, loading]);

  //const {data, loading} = useFetch();
return (
    <div id="site-container">
      <h1>Chemical Information Site</h1>
      {/* <button onClick={() => setData([...data, 'new element'])}>
        Click me
      </button> */}
      {loading ? <div>...Loading</div> : <div>{data.name.first}</div>}
    </div>
  );
}

export default App;
