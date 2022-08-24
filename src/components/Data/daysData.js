import React from "react"
import { useState, useEffect } from "react"

export default function DaysData() {
    const [currentCity, setCurrentCity] = useState("montevideo")
    const [daysInfo, setDaysInfo] = useState([])
    const [currentDayInfo, setCurrentDayInfo] = useState([]) 

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
            console.log(weatherInfo)
            weatherInfo.daily.map((day, index) => {
                setDaysInfo(prevInfo => {
                    return [
                        ...prevInfo,
                        {
                            key: index,
                            id: index,
                            day: new Date(day.dt*1000).toLocaleDateString("en-US", { weekday: "long"}),
                            average_temp: Math.floor((day.temp.min + day.temp.max) / 2),
                            min_temp: Math.floor(day.temp.min),
                            max_temp: Math.floor(day.temp.max),
                            cloudiness: day.clouds
                        }]
                })
            })

        }
        returnData()
    }, [currentCity])

    return daysInfo
}


const daysInfo = [
    {
        id: 0,
        day: "Monday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
    {
        id: 1,
        day: "Tuesday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
    {
        id: 2,
        day: "Wednesday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
    {
        id: 3,
        day: "Thursday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
    {
        id: 4,
        day: "Friday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
    {
        id: 5,
        day: "Saturday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
    {
        id: 6,
        day: "Sunday",
        averageTemp: "20 °C",
        minTemp: "13 °C",
        highTemp: "22 °C",
        status: "sunny"
    },
]

export { daysInfo } 