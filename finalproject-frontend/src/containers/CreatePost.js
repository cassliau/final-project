import React from "react";
import axios from "axios";

function CreatePost({ userAuthInfo }) {
  function submitPost(e) {
    e.preventDefault();
    const author = e.currentTarget.author.value;
    const authorID = userAuthInfo.uid;
    const cafeName = e.currentTarget.cafeName.value;
    const neighborhood = e.currentTarget.neighborhood.value;
    const ratingCoffee = e.currentTarget.ratingCoffee.value;
    const ratingSpace = e.currentTarget.ratingSpace.value;
    const ratingVibe = e.currentTarget.ratingVibe.value;

    axios
      .get(
        `https://mysterious-depths-41145.herokuapp.com/create?author=${author}&authorID=${authorID}&cafeName=${cafeName}&neighborhood=${neighborhood}&ratingCoffee=${ratingCoffee}&ratingSpace=${ratingSpace}&ratingVibe=${ratingVibe}`
      )
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("Error creating post", error);
      });
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={(e) => submitPost(e)}>
        <label>
          <input type="text" name="cafeName" placeholder="Cafe Name" />
        </label>
        <label>
          <input type="text" name="neighborhood" placeholder="Neighborhood" />
        </label>
        <label>
          Coffee Rating
          <input type="range" name="ratingCoffee" min="1" max="5" />
        </label>
        <label>
          <input type="range" name="ratingVibe" min="1" max="5" /> Vibe Rating
        </label>
        <label>
          <input type="range" name="ratingSpace" min="1" max="5" /> Space Rating
        </label>
        <button type="submit"> Post </button>
      </form>
    </div>
  );
}

export default CreatePost;
