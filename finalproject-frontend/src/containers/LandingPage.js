import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

function LandingPage() {
  return (
    <div className="landingWrapper">
      <img
        className="landingImg"
        src={process.env.PUBLIC_URL + "/img/coffeeMachine.png"}
      />
      <div className="landingContentWrapper">
        <div className="landingText">
          <h1 className="landingTitle">CaféHopping</h1>
          <div className="landingSubtitles">
            <h3>
              Explore new cafes. <br />
            </h3>
            <h3>
              Share your favorite cafes. <br />
            </h3>
            <h3> Meet your new caféhopping buddy.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
