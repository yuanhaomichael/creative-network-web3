import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ThankYou from "../../assets/thankyou.webp";
import { Link } from "react-router-dom";

function PopupModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className="thank-you-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img src={ThankYou} alt="LemonTree Media Thank You" />

      <Link to="/">
        <Button className="return-to-home">Return to home</Button>
      </Link>
    </Modal>
  );
}

export default PopupModal;
