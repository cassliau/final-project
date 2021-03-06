// Backend Application for Final Project
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//add firebase (exercise 4)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "final-project-b835d.firebaseapp.com",
  projectId: "final-project-b835d",
  storageBucket: "final-project-b835d.appspot.com",
  messagingSenderId: "705972485093",
  appId: "1:705972485093:web:779cda283f9b660b770d0c",
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

//routes import
const indexRoute = require("./routes/index.js");
const createPost = require("./routes/createPost.js");

//add more routes for getting & submitting (exercise 4)
app.use("/", indexRoute);
app.use("/create", createPost);

app.listen(port, () => console.log(`Backend is running at port:${port}`));
