import React from "react";
import CafePostForm from "../components/CafePostForm";

//page for posting
function Post({ PostFunction }) {
  return (
    <div>
      <h1>Post a Cafe</h1>
      <CafePostForm PostFunction={PostFunction} />
    </div>
  );
}

export default Post;
