import React from "react";

function CafeCard({ CafeData }) {
  return (
    <div>
      <h2>{CafeData.cafeName}</h2>
      <h3>Neighborhood: {CafeData.neighborhood}</h3>
      <div>
        <h3>Ratings:</h3>
        <p>
          Coffee: {CafeData.rating.coffee}
          <br />
          Vibe: {CafeData.rating.vibe}
          <br />
          Space: {CafeData.rating.space}
        </p>
      </div>
    </div>
  );
}

export default CafeCard;
