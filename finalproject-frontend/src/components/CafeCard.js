import React from "react";

function CafeCard({ CafeData }) {
  console.log("cafe data", CafeData);
  return (
    <div>
      <h2>{CafeData.cafeName}</h2>
      <p>by: {CafeData.author}</p>
      <h3>Neighborhood: {CafeData.neighborhood}</h3>
      <div>
        <h3>Ratings:</h3>
        <p>
          Coffee: {CafeData.ratingCoffee}
          <br />
          Vibe: {CafeData.ratingVibe}
          <br />
          Space: {CafeData.ratingSpace}
        </p>
      </div>
    </div>
  );
}

export default CafeCard;
