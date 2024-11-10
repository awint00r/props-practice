import React from "react";
import "./insta.css";
import posts from "./demopost.json"; 
import Post from "./InsagramPost.js";

function App() {

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.
        />
      ))}
    </div>
  );
}

export default App;
