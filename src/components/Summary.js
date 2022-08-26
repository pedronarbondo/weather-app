import React from "react"
import "./Summary.css"
import thermometerIcon from "../assets/icons/thermometer.svg"
import humidityIcon from "../assets/icons/humidity.svg"
import uviIcon from "../assets/icons/uvi.svg"
import windIcon from "../assets/icons/wind.svg"

export default function Summary(props) {
    const { currentDay } = props
    return (
        <div className="summary">
            <div className="temperature">
                <section className="icon">
                    <img src={thermometerIcon} />
                </section>
                <section className="info">
                    <p>Feels like</p>
                    <h4>{currentDay.temp} °C</h4>
                </section>
            </div>
            <div className="humidity">
                <section className="icon">
                    <img src={humidityIcon} />
                </section>
                <section className="info">
                    <p>Humidity</p>
                    <h4>{currentDay.humidity}%</h4>
                </section>
            </div>
            <div className="rain">
                <section className="icon">
                    <img src={uviIcon} />
                </section>
                <section className="info">
                    <p>UV Index</p>
                    <h4>{currentDay.uvi}</h4>
                </section>
            </div>
            <div className="wind">
                <section className="icon">
                    <img src={windIcon} />
                </section>
                <section className="info">
                    <p>Wind Speed</p>
                    <h4>{currentDay.wind} km/h</h4>
                </section>
            </div>
        </div>
    )
}