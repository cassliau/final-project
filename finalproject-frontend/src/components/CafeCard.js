import React from "react";

function CafeCard({ CafeData }) {
  console.log("cafe data", CafeData);
  return (
    <div className="cafeCardGrid">
      <div className="Posts">
        <h2>{CafeData.cafeName}</h2>
        <p>by: {CafeData.author}</p>
        <h3>Neighborhood:</h3>
        <p>{CafeData.neighborhood}</p>
        <div>
          <h3>Ratings:</h3>
          <p>
            Coffee: {CafeData.ratingCoffee} out of 5
            <br />
            Vibe: {CafeData.ratingVibe} out of 5
            <br />
            Space: {CafeData.ratingSpace} out of 5
          </p>
        </div>
        <div>
          <h3>About this cafe: </h3> <p>{CafeData.aboutCafe}</p>
        </div>
      </div>
    </div>
  );
}

export default CafeCard;
