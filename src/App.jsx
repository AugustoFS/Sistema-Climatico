import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/Weatherinformations/Weatherinformations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "8168a0c9e5947bef407cb1b34a32e70d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  }

  return (
    <div>
      <h1>Sistema Climatico</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
      <WeatherInformations weather={weather}/>
    </div>
  )
}

export default App
