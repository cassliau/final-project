import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import axios from "axios";

import Header from "../components/Header";

function LandingPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <img
        src={process.env.PUBLIC_URL + "/img/coffeeMachine.png"}
        width="500"
      />
    </div>
  );
}

export default LandingPage;
