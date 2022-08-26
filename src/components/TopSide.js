import React from "react"
import "./TopSide.css"
import MainInfo from "./MainInfo"
import Summary from "./Summary"
import daysInfo from "./Data/daysData"

export default function TopSide(props) {
    const currentDay = daysInfo()[1]
    
    return (
        <div className="topside">
            <MainInfo currentDay={currentDay} />
            <Summary currentDay={currentDay} />
        </div>
    )
}