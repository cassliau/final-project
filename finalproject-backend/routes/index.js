const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");

//init firebase database
const db = firebase.firestore();

//reference specific collection
const cafePosts = db.collection("cafePosts");

router.get(`/`, (req, res) => {
  //inside of this arrow function, we can do anything we want as long as we return at the end

  //init empty array
  const cafePostsArray = [];

  cafePosts
    .get()
    .then((querySnapshot) => {
      console.log("querySnapshot", querySnapshot);
      //loop through query snapshot and push into array
      querySnapshot.forEach((doc) => {
        cafePostsArray.push(doc.data());
      });
      //return array
      return res.send(cafePostsArray);
    })
    .catch(function (e) {
      console.warn("error:", e);
      //must return sth
      return res.send(error);
    });
});

module.exports = router;
