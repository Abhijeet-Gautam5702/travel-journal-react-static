import React from "react";
import pinIcon from "../assets/location-icon.png";

export default function Card(props) {
  const data = props.data;
  return (
    <div className="card">
      <div className="img-container">
        <img className="location-img" src={data.img} alt="location" />
      </div>
      <div className="text-section">
        <div className="location-container">
          <img className="pin" src={pinIcon} alt="pin" />
          <p className="country">{data.location.country}</p>
          <a target="_blank" className="map-link" href={data.location.mapLink}>
            View on Google Maps
          </a>
        </div>
        <h2>{data.location.name}</h2>
        <p className="date">{data.year}</p>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
}
