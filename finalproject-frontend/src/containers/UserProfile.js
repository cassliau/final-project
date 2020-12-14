import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CafeCard from "../components/CafeCard";

function UserProfile({ userAuthInfo }) {
  const [UserProfileData, setUserProfileData] = useState({});
  const [UserCafeData, setUserCafeData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://mysterious-depths-41145.herokuapp.com/posts/${id}`)
      .then(function (response) {
        if (response.data) {
          setUserCafeData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <h3>Posts I've made:</h3>
      {UserCafeData.map((cafe, i) => (
        <CafeCard CafeData={cafe} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
