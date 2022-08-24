import React from "react"
import "./TopSide.css"
import MainInfo from "./MainInfo"
import Summary from "./Summary"

export default function TopSide(props) {
    return (
        <div className="topside">
            <MainInfo />
            <Summary />
        </div>
    )
}
