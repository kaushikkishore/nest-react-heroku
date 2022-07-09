import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [postNumber, setPostNumber] = useState();
  const navigate = useNavigate();

  const getPost = () => {
    console.log(`Get the post ${postNumber}`);
    if (!postNumber) {
      navigate("/posts");
    } else {
      navigate(`/posts/${postNumber}`);
    }
  };
  return (
    <div className="main">
      <h1>Home</h1>
      <div className="form">
        <input
          type="number"
          min="0"
          value={postNumber}
          onChange={(event) => setPostNumber(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            getPost();
          }}
        >
          Get Post
        </button>
      </div>
    </div>
  );
};

export default Home;
