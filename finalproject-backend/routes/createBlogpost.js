//create blogpost
const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");

//init firestore database
const db = firebase.firestore();

//reference a specific collection
const blogposts = db.collection("blog posts");

const form = `
<form action="/create/submit">
    <input type="text" name= "title" placeholder = "Title of Post"/>
    <input type="text" name= "author" placeholder = "Author"/>
    <input type="text" name= "text" placeholder = "Text"/>
    <button type ="submit"> Submit </button>
</form>
`;

//default route serves form
router.get("/", (req, res) => res.send(form));

//route for submitting the form...
router.get("/submit", (req, res) => {
  const queryParams = req.query; //query params: ?title=words&author=words&text=words

  //custom IDs for our post...
  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();

  blogposts
    .doc(idFromTitle) //allow you to create new posts or update them....
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
