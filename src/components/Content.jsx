import React from "react"
import Card from "./Card"
import travelData from "../travelData"

export default function Content(){
    const cards = travelData.map((item)=>{
        return (
            <Card
                key={item.description}
                data={item}
            />
        )
    })
    return (
        <div className="content">
            {cards}
        </div>
    )
}

/*
    <Card
        location="India Gate"
        country="India"
        description="lorem ipsum dolor sit amor"
        mapLink="https://google.com"
        img=""
        startDate=
        endDate=
    />
*/