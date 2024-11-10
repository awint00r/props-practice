import React from "react";
import "./insta.css";
import posts from "./demopost.json"; 
import Post from "./InstagramPost.js";

function App() {

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          key={index}
          liked={post.liked}
          saved={post.saved}
          totalLikes={post.totalLikes}
          caption={post.caption}
          userName={post.userName}
          postImgURL={post.postImgURL}
          userImgURL={post.userImgURL}
          comments={post.comments}
          newComment=""
        />
      ))}
    </div>
  );
}

export default App;
