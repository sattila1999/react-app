import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../../state/users/actions";
import { UserForm } from "./UserForm";

export function Profile() {
  const { userId } = useParams();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const postCreator = users.find((user) => user.id === parseInt(userId));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleSubmit = (user) => {
    dispatch(updateUser(user));
  };

  const defaultState = {
    id: postCreator.id,
    name: postCreator.name,
    username: "",
    email: postCreator.email,
    address: {
      street: postCreator.address.street,
      suite: postCreator.address.suite,
      city: postCreator.address.city,
      zipcode: postCreator.address.zipcode,
      geo: {
        lat: postCreator.address.geo.lat,
        lng: postCreator.address.geo.lng,
      },
    },
    phone: postCreator.phone,
    website: postCreator.website,
    company: {
      name: postCreator.company.name,
      catchPhrase: postCreator.company.catchPhrase,
      bs: postCreator.company.bs,
    },
  };

  return (
    <>
      <h1>Users</h1>
      <div className="container">
        <div className="row">
          <div className="col mb-2">
            <li
              className="
                list-group-item
                d-flex
                justify-content-b
              "
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Name: {postCreator.name}</div>
                <div>username: {postCreator.username}</div>
                <div>email: {postCreator.email}</div>
                <div className="fw-bold">Adress</div>
                <div>street: {postCreator.address.street}</div>
                <div>suite: {postCreator.address.suite}</div>
                <div>city: {postCreator.address.city}</div>
                <div>zipcode: {postCreator.address.zipcode}</div>
                <div className="fw-bold">Geo</div>
                <div>lat: {postCreator.address.geo.lat}</div>
                <div>ing: {postCreator.address.geo.lng}</div>
                <div>phone: {postCreator.phone}</div>
                <div>website: {postCreator.website}</div>
                <div className="fw-bold">Company</div>
                <div>name: {postCreator.company.name}</div>
                <div>catchPhrase: {postCreator.company.catchPhrase}</div>
                <div>bs: {postCreator.company.bs}</div>
              </div>
              <UserForm
                user={postCreator}
                defaultState={defaultState}
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                onSubmit={handleSubmit}
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
