import React from "react"
import worldIcon from "../assets/world-icon.png"

export default function Header(){
    return (
        <header>
            <img className="world-icon" src={worldIcon} alt="world-icon" />
            <p className="title">my travel journal</p>
        </header>
    )
}