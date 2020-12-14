import React from "react";

function Header({ loggedIn, LogoutFunction, userAuthInfo }) {
  return (
    <header className="Header">
      <nav>
        {loggedIn ? (
          <>
            <a href="/create-post">Create Post</a>
            <a href="/home">Home</a>
            <a href={`/user-profile/${userAuthInfo.uid}`}>My Profile</a>
            <a className="logOutNav" onClick={() => LogoutFunction()}>
              Logout
            </a>
          </>
        ) : (
          <>
            <a className="navLogin" href="/login">
              Login
            </a>
            <a className="navSignUp" href="/sign-up">
              Sign Up
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
