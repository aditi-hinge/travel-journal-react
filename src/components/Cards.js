import React from "react";

export default function Cards(prop) {
  return (
    <div>
      <img src={prop.imageUrl} className="location-image" alt="location" />
      <div className="location-info">
        <div className="map-info">
          <p className="country-info">{prop.location}</p>
          <a href={prop.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="location-title">{prop.title}</h2>
        <p className="date-info">
          {prop.startDate} - {prop.endDate}
        </p>
        <p className="location-description">{prop.description}</p>
      </div>
    </div>
  );
}

// img