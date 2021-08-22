export function Comments({ post, comments }: any) {
  return !post ? null : (
    <div className="col">
      <h3 className="mt-3 mb-3">Commnets of "{post.title}"</h3>
      {comments.map((comment: any) => {
        if (post.id === comment.postId) {
          return (
            <li
              className="
              mb-3
              list-group-item
              d-flex
              justify-content-between
              align-items-start
            "
              key={comment.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
                <div>Body: {comment.body}</div>
              </div>
            </li>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}
