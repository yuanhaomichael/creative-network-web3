import React, { useState } from "react";
import axios from "axios";
import PopupModal from "./PopupModal";
import { Form, Button } from "react-bootstrap";

const ContactForm = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3001/api/send"
          : "/api/send",
        {
          ...state
        }
      )
      .then((response) => {
        setModalShow(true);
        setResult(response.data);
        setState({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later"
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="mt-5 mb-5 ml-5" id="ContactForm">
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail} method="POST">
        <Form.Group controlId="name" className="mt-3 mb-3">
          <Form.Label>
            <strong>Full Name:*</strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder=""
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3 mb-3">
          <Form.Label>
            <strong>Email:*</strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder=""
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone" className="mt-3 mb-3">
          <Form.Label>
            <strong>Phone Number:</strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            placeholder=""
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="message" className="mt-3 mb-0">
          <Form.Label>
            <strong>Tell us More:</strong>*<br />
            ⛰️ Context: what business problem can we help you solve?
            <br />
            🚩 Goal: what is the core objective? <br />
          </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="5"
            placeholder=""
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-5 mb-5">
          Submit
        </Button>
      </form>

      <PopupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ContactForm;
