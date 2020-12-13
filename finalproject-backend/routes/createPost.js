//create post
const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");

//init firestore database
const db = firebase.firestore();

//reference a specific collection
const cafePosts = db.collection("cafeposts");

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

router.post("/post", async (req, res) => {
  try {
    const dbResponse = await cafePosts.add({
      cafeName: req.body["cafeName"],
      neighborhood: req.body["neighborhood"],
      ratingCoffee: req.body["ratingCoffee"],
      ratingVibe: req.body["ratingCoffee"],
      ratingSpace: req.body["ratingSpace"],
    });
    res.status(201).send("Success");
  } catch (err) {
    console.log(err);
    res.status(400).send("FAILURE");
  }
});

module.exports = router;
