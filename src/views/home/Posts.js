import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../state/UsersProvider";

export function Posts({ posts, selectedPostId }) {
  const { users } = useContext(UsersContext);
  return (
    <div className="col">
      <h3 className="mt-3 mb-3">Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            className="fw-bold text-warning badge bg-dark rounded-pill"
            to={`/profile/${post.userId}`}
          >
            {users.find((user) => user.id === post.userId).name}
          </Link>
          <Link
            to={`/${post.id}`}
            className={`
                mb-3
                list-group-item
                d-flex
                justify-content-between
                align-items-start
                ${post.id === selectedPostId ? "active" : ""}
              `}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Title: {post.title}</div>
              <div>Body: {post.body}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
