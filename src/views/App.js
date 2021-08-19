import { Menu } from "./menu/Menu";
import { Comments } from "./postsAndComments/Comments";
import { Posts } from "./postsAndComments/Posts";
import { examplePosts } from "../domain/posts";
import { exampleComments } from "../domain/comments";
import { useState } from "react";

export function App() {
  const [selectedPostId, setSelectedPostId] = useState(1);
  const selectedPost = examplePosts.find((post) => post.id === selectedPostId);
  return (
    <div className="container">
      <Menu />
      <h1>Posts and comments</h1>
      <div className="container">
        <div className="row">
          <Posts
            posts={examplePosts}
            selectedPostId={selectedPost.id}
            onSelect={(id) => setSelectedPostId(id)}
          />
          <Comments post={selectedPost} comments={exampleComments} />
        </div>
      </div>
    </div>
  );
}
