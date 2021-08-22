import { Comments } from "./Comments";
import { Posts } from "./Posts";
import { examplePosts } from "../../domain/posts";
import { exampleComments } from "../../domain/comments";
import { useParams } from "react-router-dom";

export function Home() {
  interface ParamTypes {
    postId: any;
  }
  const { postId: postIdParam } = useParams<ParamTypes>();
  const selectedPostId = Number.parseInt(postIdParam);
  const selectedPost = examplePosts.find((post) => post.id === selectedPostId);
  return (
    <>
      <h1>Posts and comments</h1>
      <div className="container">
        <div className="row">
          <Posts posts={examplePosts} selectedPostId={selectedPostId} />
          <Comments post={selectedPost} comments={exampleComments} />
        </div>
      </div>
    </>
  );
}
