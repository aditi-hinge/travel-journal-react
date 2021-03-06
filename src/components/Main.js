//first method

export default function Main({
  image,
  title,
  location,
  startDate,
  endDate,
  description
}) {
  return (
    <div>
      <img className="image" alt="mount fuji" src={image} />
      <img
        alt="map pin icon"
        src="https://img.icons8.com/material-outlined/24/000000/map--v1.png"
      />
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
