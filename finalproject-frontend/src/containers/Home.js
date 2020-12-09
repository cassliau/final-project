import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [cafeAPIData, setCafeAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mysterious-depths-41145.herokuapp.com/`)
      .then(function (response) {
        if (response.data) {
          setCafeAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);
  console.log({ cafeAPIData });

  return (
    <div>
      <h1>All Cafes</h1>
      {cafeAPIData.map((cafe, i) => (
        <div key={i}>
          <h2>{cafe.cafeName}</h2>
          <p>
            By: {cafe.authorName}
            <br />@{cafe.authorUsername}
          </p>
          <h3>
            {cafe.neighborhood} <br />
            {cafe.address} <br />
          </h3>
          <h3>Ratings</h3>
          <p>
            Overall: {cafe.rating[0].overall} <br />
            Coffee: {cafe.rating[0].coffee} <br />
            Menu: {cafe.rating[0].menu} <br />
            Vibe: {cafe.rating[0].vibe} <br />
            Space: {cafe.rating[0].space} <br />
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
