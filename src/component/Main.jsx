import { useState } from "react";
import PostForm from "./PostForm.jsx";
import PostList from "./PostList.jsx";
import { post } from "./post.js";

export default function Main() {
  const [posts, setPosts] = useState(post);

  return (
    <div className="main">
      <div className="sidebar">환경을 위한 실천</div>
      <div className="main_content">
        <PostForm setPosts={setPosts} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}
