import React from "react";

export default function Main({
  img,
  title,
  location,
  startDate,
  endDate,
  description
}) {
  return (
    <div>
      <img alt="mount fuji" src={img} />
      <p>{location}</p>
      <h2>{title}</h2>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{description}</p>
    </div>
  );
}

// img = "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzMzOTgxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
//         title =  "Mount Fuji"
//         location = "Japan"
//         startDate =  "12 Jan, 2021"
//         endDate =  "24 Jan, 2021"
//         description =
