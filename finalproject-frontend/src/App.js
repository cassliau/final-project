import { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

//styles
import "./App.css";

//Pages
import CreateAccount from "./containers/CreateAccount";
import Home from "./containers/Home";
import Login from "./containers/Login";
import UserProfile from "./containers/UserProfile";
import CreatePost from "./containers/CreatePost";

//Components
import Header from "./components/Header";
import LandingPage from "./containers/LandingPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //boolean to determine if logged in
  const [loading, setLoading] = useState(true); // is page loading
  const [userAuthInfo, setUserAuthInfo] = useState({});

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "final-project-b835d.firebaseapp.com",
    projectId: "final-project-b835d",
    storageBucket: "final-project-b835d.appspot.com",
    messagingSenderId: "705972485093",
    appId: "1:705972485093:web:779cda283f9b660b770d0c",
  };

  //ensure app is initalized when it is ready
  useEffect(() => {
    //check if firebase exists
    if (!firebase.apps.length) {
      //initialize firebase
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  //check to see if the user is logged in
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        //user is logged in
        setLoggedIn(true);
        setUserAuthInfo(user);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  //function for logging in
  function LoginFunction(e) {
    //this is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        // console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }

  // function for logging out
  function LogoutFunction() {
    //function to run when you want to log out...
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserAuthInfo({});
      })
      .catch(function (error) {
        console.log("LOG OUT ERROR");
      });
  }
  //function for creating an account
  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED:", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("CREATE ACCOUNT ERROR", error);
      });
  }

  //doesn't flash
  if (loading) return null;

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        LogoutFunction={LogoutFunction}
        userAuthInfo={userAuthInfo}
      />
      <Router>
        <Route exact path="/">
          {/* If someone is NOT logged in, take them to landing page*/}
          {!loggedIn ? <LandingPage /> : <Redirect to="/home" />}
        </Route>

        <Route exact path="/home">
          {!loggedIn ? <Redirect to="/" /> : <Home />}
        </Route>

        <Route exact path="/login">
          {/* If someone is logged in, do not take them to login page - take them to home*/}
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>

        <Route exact path="/create-post">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <CreatePost userAuthInfo={userAuthInfo} />
          )}
        </Route>

        <Route exact path="/create-account">
          {/* If someone is logged in, do not take them to create account page - take them to user profile*/}
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>

        <Route exact path="/user-profile/:id">
          {/* If someone is NOT logged in, do not take them to user profile page - take them to login*/}
          {!loggedIn ? <Redirect to="/" /> : <UserProfile />}
        </Route>
      </Router>
    </div>
  );
}

export default App;
