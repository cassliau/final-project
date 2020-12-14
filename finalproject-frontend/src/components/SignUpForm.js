import React from "react";

function SignUpForm({ SignUpFunction }) {
  return (
    <div>
      <form className="signUpForm" onSubmit={(e) => SignUpFunction(e)}>
        <label className="signUpEmail" htmlFor="createEmail">
          Email
        </label>
        <input type="email" name="createEmail" />

        <label className="signUpPassword" htmlFor="createPassword">
          Password
        </label>
        <input type="password" name="createPassword" />
        <button className="signUpFormButton">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
