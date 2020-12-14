import React from "react";

function CafeCard({ CafeData }) {
  return (
    <div>
      <h2>{CafeData.cafeName}</h2>
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
