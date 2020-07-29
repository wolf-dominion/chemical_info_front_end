import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const dataURL = "https://sheet.best/api/sheets/955ad1a5-948c-49c5-81f0-2f832fb1efbb"
  const userURL = 'https://api.randomuser.me/'
  const [data, setData] = useState(null);
  const [person, setPerson] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingPerson, setLoadingPerson] = useState(true);
  const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch(userURL)
        .then(res => {
          if(res.ok) {
            return res.json();
          } else {
            throw Error("Error during fetch call")
          }
        })
        .then(res => {
          console.log(res);
          setPerson(res);
          setLoadingPerson(false);
        })
        .catch(error => {
          setError(error)
        })

        fetch(dataURL)
        .then(res => {
          if(res.ok) {
            return res.json();
          } else {
            throw Error("Error during fetch call")
          }
        })
        .then(res => {
          console.log(res);
          setData(res);
          setLoadingData(false);
        })
        .catch(error => {
          setError(error)
        })
    }, []);

    const displayResults = () => {
      return data.map(item => {
        console.log(item)
        return <li>{item.name}</li>
      })
    }

return (
    <div id="site-container">
      <h1>Chemical Information Site</h1>
      {loadingPerson ? <div>...Loading Person</div> : <div>{person.results[0].name.first}</div>}
      {/* {loadingData ? <div>...Loading Data</div> : <div>{data[0].name}</div>} */}
      {loadingData ? <div>...Loading Data</div> : <div>{displayResults()}</div>}
    </div>
  );
}

export default App;
