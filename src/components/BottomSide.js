import React from "react"
import Days from "./Days"
import "./BottomSide.css"


export default function BottomSide(props) {
    const { daysInfo } = props
    return (
        <div>
            <Days dayInfo={daysInfo} />
        </div>
    )
}