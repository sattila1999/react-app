import { Menu } from "./menu/Menu";
import { Comments } from "./postsAndComments/Comments";
import { Posts } from "./postsAndComments/Posts";

export function App() {
  return (
    <div className="container">
      <Menu />
      <h1>Posts and comments</h1>
      <div className="container">
        <div className="row">
          <Posts />
          <Comments />
        </div>
      </div>
    </div>
  );
}
