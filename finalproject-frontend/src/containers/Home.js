import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../components/Header";
import CafeCard from "../components/CafeCard";

function Home() {
  const [cafeAPIData, setCafeAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mysterious-depths-41145.herokuapp.com/all-posts`)
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
      <h1>All Cafe Posts</h1>
      {cafeAPIData.map((cafe, i) => (
        <CafeCard CafeData={cafe} key={i} />
      ))}

      {/* <form action="http://localhost:4000/create/post" method="POST">
        <input type="text" name="cafeName" placeholder="Cafe Name" />
        <input type="text" name="neighborhood" placeholder="Neighborhood" />
        <input type="range" name="ratingCoffee" min="1" max="5" /> Coffee Rating
        <input type="range" name="ratingVibe" min="1" max="5" /> Vibe Rating
        <input type="range" name="ratingSpace" min="1" max="5" /> Space Rating
        <button type="submit"> Post </button>
      </form> */}
    </div>
  );
}

export default Home;
