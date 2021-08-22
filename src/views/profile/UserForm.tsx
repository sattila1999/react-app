import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function UserForm({
  user,
  defaultState,
  show,
  handleShow,
  handleClose,
  onSubmit,
}: any) {
  const [formState, setFormState] = useState(defaultState);

  useEffect(() => {
    if (show) {
      setFormState(defaultState);
    }
  }, [show, defaultState]);

  const handleChange = (name: any, value: any) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formState);
    handleClose();
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Modify username
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        onSubmit={handleSubmit}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Active username: {user.username}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>New username: </Form.Label>
              <Form.Control
                value={formState.username}
                name="username"
                onChange={(e) => handleChange("username", e.target.value)}
                required
                type="text"
                placeholder={user.username}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="button" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
