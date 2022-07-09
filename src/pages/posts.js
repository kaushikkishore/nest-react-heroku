import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [found, setFound] = useState(true);

  useEffect(() => {
    // setPosts([{ id: 1, user: "k" }]);
    retreive();
  }, []);

  const retreive = async () => {
    console.log(`Params ${params.id}`);
    let url = "https://kaushik-nest-api.herokuapp.com/posts";
    let isSingleObject = false;
    if (+params.id > 0) {
      isSingleObject = true;
      url = `${url}/${+params.id}`;
    }
    const response = await fetch(url);
    let postsData = await response.json();

    if (isSingleObject) {
      setFound(postsData && postsData.title && postsData.body);
      postsData = [postsData];
    }
    setPosts(postsData);
  };

  return (
    <>
      {found ? (
        <div className="">
          <h1>All Posts</h1>
          {posts.map((p, i) => {
            return (
              <div key={i}>
                <div className="posts">
                  <div>
                    <strong>Title:</strong> {p.title}
                  </div>
                  <div>
                    <strong>Body:</strong> {p.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="posts">Not found</div>
      )}
    </>
  );
};

export default Posts;
