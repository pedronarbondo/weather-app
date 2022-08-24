import React from "react"
import "./MainInfo.css"
import sunnyDay from "../assets/icons/sunnyDay.svg"

export default function MainInfo(props) {
    return (
        <div className="mainInfo">
            <h2>Clear Sky</h2>
            <h4>Montevideo</h4>
            <h6>Wednesday, 24th Aug '22 11:10 AM</h6>
            <h1>19 °C</h1>
            <div>
                <img className="dayIcon"src={sunnyDay} />
            </div>
            <input type="text" placeholder="Search Location..."></input>
        </div>
    )
}