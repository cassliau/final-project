//show one blog post
const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");

//init firestore database
const db = firebase.firestore();

//reference a specific collection
const blogposts = db.collection("cafePosts");

//if there is no ID provided, send this msg
router.get("/", (req, res) => res.send("No ID provided"));

//get a post by ID
router.get("/:id", (req, res) => {
  //get the query parameter from the URL and set it to a variable
  const queryId = req.params.id;
  //query the collection
  cafePosts
    .doc(queryId) //looking up document by id
    .get()
    .then(function (doc) {
      if (doc.exists) {
        //checking if the document exists
        const data = doc.data(); //asigning the document data to a variable
        return res.send(data); //send data to use who queries
      } else {
        //if no document exists
        return res.send("No doc exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
