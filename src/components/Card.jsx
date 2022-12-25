import React from "react"
import travelData from "../travelData"

export default function Card(props){
    const data = props.data;
    return (
        <div className="card">

            <div className="img-container">
                <img className="location-img" src={data.img} alt="location" />
            </div>
            <div className="text-section">
                Text-section of the Card
            </div>
        </div>
    )
}