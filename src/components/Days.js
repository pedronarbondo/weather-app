import React from "react"
import sunnyDay from "../assets/icons/sunnyDay.svg"
import cloudyDay from "../assets/icons/cloudyDay.svg"
import "./Days.css"

export default function Days(props) {
    const { dayInfo } = props
    const mappedDays = dayInfo.map(day => {
        return (
            <div key={day.id} className="dayInfo">
                <h4>{day.day}</h4>
                <h3>{day.average_temp} °C</h3>
                <h5>{day.min_temp} °C | {day.max_temp} °C</h5>
                <img src={day.cloudiness > 50 ? cloudyDay : sunnyDay} />
            </div>
        )
    })

    return (
        <div className="dayInfoHolder">
            {mappedDays}
        </div>
    )
}