import React from "react"
import "./Main.css"
import TopSide from "./TopSide"
import BottomSide from "./BottomSide"

export default function Main() {
    return (
        <div className="main">
            <TopSide/>
            <BottomSide />
        </div>
    )
}