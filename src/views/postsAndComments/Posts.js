import { exampleUsers } from "../../domain/users";

export function Posts({ posts, selectedPostId, onSelect }) {
  return (
    <div className="col">
      <h3 className="mt-3 mb-3">Posts</h3>
      <ol className="list-group list-group-numbered">
        {posts.map((post) => (
          <li
            className={`
                list-group-item
                d-flex
                justify-content-between
                align-items-start
                ${post.id === selectedPostId ? "active" : ""}
              `}
            key={post.id}
            onClick={() => onSelect(post.id)}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Title: {post.title}</div>
              <a className="fw-bold text-warning" href="#">
                User
              </a>
              <div>Body: {post.body}</div>
            </div>
            <span className="badge bg-dark rounded-pill">
              {exampleUsers.find((user) => user.id === post.userId).name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
