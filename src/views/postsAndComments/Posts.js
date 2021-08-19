export function Posts() {
  return (
    <div className="col">
      <h3 className="mt-3 mb-3">Posts</h3>
      <ol className="list-group list-group-numbered">
        <li
          className="
                list-group-item
                active
                d-flex
                justify-content-between
                align-items-start
              "
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Post</div>
            <a className="fw-bold text-warning" href="#">
              User
            </a>
            <div>Title</div>
            <div>Body</div>
          </div>
          <span className="badge bg-dark rounded-pill">Comments Number</span>
        </li>
        <li
          className="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Post</div>
            <a className="fw-bold text-warning" href="#">
              User
            </a>
            <div>Title</div>
            <div>Body</div>
          </div>
          <span className="badge bg-dark rounded-pill">Comments Number</span>
        </li>
        <li
          className="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Post</div>
            <a className="fw-bold text-warning" href="#">
              User
            </a>
            <div>Title</div>
            <div>Body</div>
          </div>
          <span className="badge bg-dark rounded-pill">Comments Number</span>
        </li>
        <li
          className="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Post</div>
            <a className="fw-bold text-warning" href="#">
              User
            </a>
            <div>Title</div>
            <div>Body</div>
          </div>
          <span className="badge bg-dark rounded-pill">Comments Number</span>
        </li>
      </ol>
    </div>
  );
}
