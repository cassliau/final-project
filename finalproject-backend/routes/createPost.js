const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const cafePosts = db.collection("cafeposts");

router.get("/", (req, res) => {
  const queryParams = req.query;

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
