import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios';
import styled from 'styled-components';

const People = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

  
    

const App = () => {
  
  
  const [charData, setCharData] = useState([]);
    
    
    useEffect(() => {
       
      axios
        .get(`https://swapi.dev/api/people/`)
        .then(response => {
          console.log("success!", response);
          setCharData(response.data.results);
        })
        .catch(error => console.log(error, "oops"));
    
    
    }, []);
    
console.log(charData)
    

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <People className="App">
      <h1 className="Header">Star Wars: The People</h1>
      <Character charData={charData} />
    </People>
  );
}

export default App;
