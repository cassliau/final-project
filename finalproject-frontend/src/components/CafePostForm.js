import React from "react";

function CafePostForm({ PostFunction }) {
  return (
    <div>
      <form action="http://localhost:4000/create/post" method="POST">
        <input type="text" name="cafeName" placeholder="Cafe Name" />
        <input type="text" name="neighborhood" placeholder="Neighborhood" />
        <input type="range" name="ratingCoffee" min="1" max="5" /> Coffee Rating
        <input type="range" name="ratingVibe" min="1" max="5" /> Vibe Rating
        <input type="range" name="ratingSpace" min="1" max="5" /> Space Rating
        <button type="submit"> Post </button>
      </form>
    </div>
  );
}

export default CafePostForm;
