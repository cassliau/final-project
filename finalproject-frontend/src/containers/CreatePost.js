import React from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CreatePost({ userAuthInfo }) {
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

    console.log(e.currentTarget);

    axios
      .get(
        `https://mysterious-depths-41145.herokuapp.com/create?&author=${author}&authorID=${authorID}&cafeName=${cafeName}&neighborhood=${neighborhood}&ratingCoffee=${ratingCoffee}&ratingSpace=${ratingSpace}&ratingVibe=${ratingVibe}`
      )
      .then(function (response) {
        history.push("/home");
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("Error creating post", error);
      });
  }

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form className="createPostForm" onSubmit={(e) => submitPost(e)}>
        <div>
          <div className="createPostFormInputText">
            <label>
              <input type="text" name="author" placeholder="Author" />
            </label>
            <label>
              <input type="text" name="cafeName" placeholder="Cafe Name" />
            </label>
            <label>
              <input
                type="text"
                name="neighborhood"
                placeholder="Neighborhood"
              />
            </label>
          </div>
          <div className="ratings">
            <label>
              Coffee Rating
              <input type="range" name="ratingCoffee" min="1" max="5" />
            </label>
            <br />
            <label>
              Vibe Rating
              <input type="range" name="ratingVibe" min="1" max="5" />
            </label>
            <br />
            <label>
              Space Rating
              <input type="range" name="ratingSpace" min="1" max="5" />
            </label>
            <br />
          </div>
          <div>
            <label className="aboutCafe">
              <input
                type="text"
                name="aboutCafe"
                placeholder="About the cafe"
              />
            </label>
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
