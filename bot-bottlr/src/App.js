import React, { useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';
import './App.css';
const App=()=>{
  const [bots, setBots]=useState([]);
  const [MyBotArmy, setMyBotArmy]=useState([])

  useEffect(() => {
    // Fetch data from the server and set it in the state
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
const enlistBot =(botId)=>{
   // Find the selected bot by id from the 'bots' array
   const selectedBot = bots.find((bot)=>botId ===botId)
}
  return (
    <div className="App">
    </div>
  );
}

export default App;
