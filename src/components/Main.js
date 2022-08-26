import React from "react"
import "./Main.css"
import TopSide from "./TopSide"
import BottomSide from "./BottomSide"


export default function Main(props) {
    const { currentDayInfo, daysInfo, cityChanger } = props

    return (
        <div className="main">
            <TopSide currentDay={currentDayInfo} cityChanger={cityChanger} />
            <BottomSide daysInfo={daysInfo} />
        </div>
    )
}