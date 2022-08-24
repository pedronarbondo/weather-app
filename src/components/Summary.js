import React from "react"
import "./Summary.css"
import thermometerIcon from "../assets/icons/thermometer.svg"
import humidityIcon from "../assets/icons/humidity.svg"
import rainIcon from "../assets/icons/rain.svg"
import windIcon from "../assets/icons/wind.svg"

export default function Summary(props) {
    return (
        <div className="summary">
            <div className="temperature">
                <section className="icon">
                    <img src={thermometerIcon} />
                </section>
                <section className="info">
                    <p>Feels like</p>
                    <h4>19 °C</h4>
                </section>
            </div>
            <div className="humidity">
                <section className="icon">
                    <img src={humidityIcon} />
                </section>
                <section className="info">
                    <p>Humidity</p>
                    <h4>68%</h4>
                </section>
            </div>
            <div className="rain">
                <section className="icon">
                    <img src={rainIcon} />
                </section>
                <section className="info">
                    <p>Chance of Rain</p>
                    <h4>0%</h4>
                </section>
            </div>
            <div className="wind">
                <section className="icon">
                    <img src={windIcon} />
                </section>
                <section className="info">
                    <p>Wind Speed</p>
                    <h4>11.1 km/h</h4>
                </section>
            </div>
        </div>
    )
}