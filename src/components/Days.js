import React from "react"
import daysInfoState, { daysInfo } from "./Data/daysData"
import sunnyDay from "../assets/icons/sunnyDay.svg"
import cloudyDay from "../assets/icons/cloudyDay.svg"
import "./Days.css"

/*export default function Days() {
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

    console.log(daysInfoState())
    return (
        <div className="dayInfoHolder">
            {mappedDays}
        </div>
    )
} */

export default function Days() {
    const dayInfo = daysInfoState()
    console.log(dayInfo)
    const mappedDays = dayInfo.map(day => {
        return (
            <div key={day.id} className="dayInfo">
                <h4>{day.day}</h4>
                <h3>{day.average_temp} °C</h3>
                <h5>{day.min_temp} °C | {day.max_temp} °C</h5>
                <img src={day.cloudiness > 50 ? cloudyDay : sunnyDay}/>
            </div>
        )
    })

    return (
        <div className="dayInfoHolder">
            {mappedDays}
        </div>
    )
}