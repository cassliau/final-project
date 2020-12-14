import React from "react";
import SignUpForm from "../components/SignUpForm";

function SignUp({ SignUpFunction }) {
  return (
    <div className="signUpForm">
      <h1>Sign Up</h1>
      <SignUpForm SignUpFunction={SignUpFunction} />
    </div>
  );
}

export default SignUp;
