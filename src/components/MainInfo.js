import React from "react"
import "./MainInfo.css"
import sunnyDay from "../assets/icons/sunnyDay.svg"
import cloudyDay from "../assets/icons/cloudyDay.svg"

export default function MainInfo(props) {
    const { currentDay } = props 

    return (
        <div className="mainInfo">
            <h2>{currentDay.currentWeather}</h2>
            <h4>{currentDay.city}</h4>
            <h6>{currentDay.day} {currentDay.date} {currentDay.hour}</h6>
            <h1>{currentDay.temp} °C</h1>
            <div>
                <img className="dayIcon"src={currentDay.cloudiness > 50 ? cloudyDay : sunnyDay} />
            </div>
            <input type="text" placeholder="Search Location..."></input>
        </div>
    )
}