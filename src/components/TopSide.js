import React from "react"
import "./TopSide.css"
import MainInfo from "./MainInfo"
import Summary from "./Summary"

export default function TopSide(props) {
    const { currentDay, cityChanger } = props

    return (
        <div className="topside">
            <MainInfo currentDay={currentDay} cityChanger={cityChanger} />
            <Summary currentDay={currentDay} />
        </div>
    )
}