import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreatePost({ userAuthInfo }) {
  const [coffeeRating, setCoffeeRating] = useState(5);
  const [vibeRating, setVibeRating] = useState(5);
  const [spaceRating, setSpaceRating] = useState(5);
  const history = useHistory();
  function submitPost(e) {
    e.preventDefault();
    const author = e.currentTarget.author.value;
    const authorID = userAuthInfo.uid;
    const cafeName = e.currentTarget.cafeName.value;
    const neighborhood = e.currentTarget.neighborhood.value;
    const ratingCoffee = e.currentTarget.ratingCoffee.value;
    const ratingSpace = e.currentTarget.ratingSpace.value;
    const ratingVibe = e.currentTarget.ratingVibe.value;
    const aboutCafe = e.currentTarget.aboutCafe.value;

    // console.log(e.currentTarget);

    axios
      .get(
        `http://localhost:4000/create?&author=${author}&authorID=${authorID}&cafeName=${cafeName}&neighborhood=${neighborhood}&ratingCoffee=${ratingCoffee}&ratingSpace=${ratingSpace}&ratingVibe=${ratingVibe}&aboutCafe=${aboutCafe}`
      )
      .then(function (response) {
        history.push("/home");
        // console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        // console.log("Error creating post", error);
      });
  }

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form className="createPostForm" onSubmit={(e) => submitPost(e)}>
        <div>
          <div className="createPostFormInputText">
            <label>
              Author
              <input type="text" name="author" />
            </label>
            <label>
              Cafe Name
              <input type="text" name="cafeName" />
            </label>
            <label>
              Neighborhood
              <input type="text" name="neighborhood" />
            </label>
          </div>
          <div className="ratings">
            <label>
              You are rating the coffee <br />
              <input
                type="range"
                name="ratingCoffee"
                min="1"
                max="5"
                onChange={(e) => setCoffeeRating(e.target.value)}
              />
              <div>
                <strong>{coffeeRating} </strong> out of 5
              </div>
            </label>
            <br />
            <label>
              You are rating the vibe <br />
              <input
                type="range"
                name="ratingVibe"
                min="1"
                max="5"
                onChange={(e) => setVibeRating(e.target.value)}
              />
              <div>
                <strong>{vibeRating} </strong> out of 5
              </div>
            </label>
            <br />
            <label>
              You are rating the space <br />
              <input
                type="range"
                name="ratingSpace"
                min="1"
                max="5"
                onChange={(e) => setSpaceRating(e.target.value)}
              />
              <div>
                <strong>{spaceRating} </strong> out of 5
              </div>
            </label>
            <br />
          </div>
          <div>
            <textarea
              name="aboutCafe"
              placeholder="About the cafe"
              cols="120"
              rows="8"
            ></textarea>
          </div>
        </div>
        <button className="createPostFormButton" type="submit">
          {" "}
          Post{" "}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
