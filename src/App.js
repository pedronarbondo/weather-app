import Main from "./components/Main"
import "./App.css"

import { useState, useEffect } from "react"


function App() {

  const [currentCity, setCurrentCity] = useState("montevideo")
  const [daysInfo, setDaysInfo] = useState([])
  const [currentDayInfo, setCurrentDayInfo] = useState({})

  const changeCity = (nextCity) => {
    setCurrentCity(nextCity)
  }

  useEffect(() => {
    async function getCoordinates(city) {
      try {
        let coordinates = {}
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=99f47c30a36a2928fc73121f9434dc1c`)
        const data = await response.json()
        coordinates = { lat: data[0].lat, lon: data[0].lon }
        return coordinates
      }
      catch {
        console.log("Couldn't find your city")
      }
    }

    async function getWeatherData(coordinates) {
      try {
        let weatherData = []
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${"metric"}&appid=99f47c30a36a2928fc73121f9434dc1c`)
        const data = await response.json()
        weatherData = data
        return weatherData
      }
      catch {
        console.log("Couldn't find your city")
      }
    }
    async function returnData() {
      let coordinates = await getCoordinates(currentCity)
      let weatherInfo = await getWeatherData(coordinates)

      const mappedInfo = weatherInfo.daily.map((day, index) => {
        return {
          key: index,
          id: index,
          day: new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" }),
          average_temp: Math.floor((day.temp.min + day.temp.max) / 2),
          min_temp: Math.floor(day.temp.min),
          max_temp: Math.floor(day.temp.max),
          cloudiness: day.clouds
        }
      })
      setDaysInfo(mappedInfo)
      setCurrentDayInfo({
        id: weatherInfo.timezone,
        city: weatherInfo.timezone,
        currentWeather: weatherInfo.current.weather[0].main,
        day: new Date(weatherInfo.current.dt * 1000).toLocaleDateString("en-US", { weekday: "long" }),
        date: new Date(weatherInfo.current.dt * 1000).toLocaleDateString("en-US",
          { year: "numeric", month: "long", day: "numeric" }),
        hour: new Date(weatherInfo.current.dt * 1000).toLocaleTimeString("en-US",
          { hour12: false, hour: "2-digit", minute: "2-digit" }),
        temp: Math.floor(weatherInfo.current.feels_like),
        cloudiness: weatherInfo.current.clouds,
        humidity: weatherInfo.current.humidity,
        uvi: weatherInfo.current.uvi,
        wind: weatherInfo.current.wind_speed
      })
    }
    returnData()
  }, [currentCity])




  return (
    <div className="App">
      <Main
        daysInfo={daysInfo}
        currentDayInfo={currentDayInfo}
        cityChanger={changeCity}></Main>
    </div>
  );
}

export default App;
