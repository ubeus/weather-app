import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState('')
  useEffect(() => {
    axios
    .get('http://api.weatherapi.com/v1/current.json?key=6736147cebe740b486493829211611&q= stockholm&aqi=no')
    .then(response => {
      setWeather(response.data)
      console.log(response.data)
    })
    .catch(err => console.log(err))
  },[])
  //Event
  const weatherInput = (event) => {
    setInput(event.target.value)
  }
  const searchWeather = () => {
    axios
    .get(`http://api.weatherapi.com/v1/current.json?key=6736147cebe740b486493829211611&q=${input}&aqi=no`)
    .then(response => {
      setWeather(response.data)
    })
  }
  return (
    <div className="App">
      <div className="search">
        <input onChange={weatherInput} type="text" />
        <button onClick={searchWeather}>Search</button>
      </div>
      {weather && (
      <div className='weather'>
      <h1>{weather.location.name}</h1>
      <h2>{weather.location.region}</h2>
      <div className='condition'>
        <h3>{weather.current.condition.text}</h3>
        <img src={weather.current.condition.icon} alt='icon'></img>
        <h3>{weather.current.temp_c} Celsius</h3>
      </div>
      </div>
      )}
    </div>
  );
}

export default App;
