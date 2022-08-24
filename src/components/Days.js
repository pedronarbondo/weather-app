import React from "react"
import { daysInfo } from "./Data/daysData"
import sunnyDay from "../assets/icons/sunnyDay.svg"
import "./Days.css"

export default function Days(props) {
    const mappedDays = daysInfo.map(day => {
        return (
            <div key={day.id} className="dayInfo">
                <h4>{day.day}</h4>
                <h3>{day.averageTemp}</h3>
                <h5>{day.minTemp} | {day.highTemp}</h5>
                <img src={sunnyDay} />
            </div>
        )
    })

    return (
        <div className="dayInfoHolder">
            {mappedDays}
        </div>
    )
}