import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../components/Header";
import CafeCard from "../components/CafeCard";

function Home() {
  const [cafeAPIData, setCafeAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/all-posts`)
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
      <a href="/create-post">Create Post</a>
      <h1>All Cafe Posts</h1>
      {cafeAPIData.map((cafe, i) => (
        <CafeCard CafeData={cafe} key={i} />
      ))}
    </div>
  );
}

export default Home;
