import React from "react"
import { useState, useEffect } from "react"

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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=99f47c30a36a2928fc73121f9434dc1c`)
        const data = await response.json()
        weatherData = data
        console.log(weatherData)
        return weatherData
    }
    catch {
        console.log("Couldn't find your city")
    }
}

async function returnData() {
    let coordinates = await getCoordinates("montevideo")
    getWeatherData(coordinates)
}

returnData()

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