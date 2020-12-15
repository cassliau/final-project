import React from "react";

function CafeCard({ CafeData }) {
  // console.log("cafe data", CafeData);
  return (
    <div className="cafeCardGrid">
      <div className="Posts">
        <div>
          <h2>
            <span className="cafeName">{CafeData.cafeName} </span>
            <span className="authorName"> by: {CafeData.author}</span>
          </h2>
        </div>
        <div className="postContent">
          <div>
            <h3>Neighborhood:</h3>
            <p className="neighborhood">{CafeData.neighborhood}</p>
          </div>

          <div>
            <h3>I rated the... </h3>
            <p className="ratings">
              Coffee: {CafeData.ratingCoffee} out of 5
              <br />
              Vibe: {CafeData.ratingVibe} out of 5
              <br />
              Space: {CafeData.ratingSpace} out of 5
            </p>
          </div>
          <div>
            <h3>About this cafe: </h3>{" "}
            <p className="aboutCafe">{CafeData.aboutCafe}</p>
          </div>
        </div>
        <p className="timeStamp">
          Posted on:{" "}
          {CafeData.timeStamp && new Date(CafeData.timeStamp).toString()}
        </p>
      </div>
    </div>
  );
}

export default CafeCard;
