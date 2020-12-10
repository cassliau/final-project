import React from "react";

function LoginForm({ LoginFunction }) {
  return (
    <div>
      <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
        <label className="loginEmail" htmlFor="loginEmail">
          Email
        </label>
        <input type="email" name="loginEmail" />
        <label className="loginPassword" htmlFor="loginPassword">
          Password
        </label>
        <input type="password" name="loginPassword" />
        <button className="LoginFormButton"> Login </button>
      </form>
    </div>
  );
}

export default LoginForm;
