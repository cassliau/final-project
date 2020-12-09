//create post
const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");

//init firestore database
const db = firebase.firestore();

//reference a specific collection
const blogposts = db.collection("cafePosts");

const post = `
<form action="/create/post">
    <input type="text" name= "cafeName" placeholder = "Cafe Name"/>
    <input type="text" name= "neighborhood" placeholder = "Neighborhood"/>
    <input type="range" name= "ratingCoffee" min="1" max="5"/> Coffee Rating
    <input type="range" name= "ratingVibe" min="1" max="5" "/> Vibe Rating
    <input type="range" name= "ratingSpace" min="1" max="5" "/> Space Rating
    <button type ="post"> Post </button>
</form>
`;

//default route serves form
router.get("/", (req, res) => res.send(post));

//route for submitting the form...
router.get("/submit", (req, res) => {
  const queryParams = req.query; //query params: ?title=words&author=words&text=words

  //custom IDs for our post...
  const idFromCafeName = queryParams.cafeName
    .replace(/\s+/g, "-")
    .toLowerCase();

  cafePosts
    .doc(idFromCafeName) //allow you to create new posts or update them....
    .set(queryParams)
    .then(function (doc) {
      res.send("successful submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("failed submission");
    });
});

module.exports = router;
