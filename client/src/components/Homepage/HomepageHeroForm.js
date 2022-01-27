import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const HomepageHeroForm = ({ handleSubmit, handleChange }) => {
  return (
    <Form className="homepage-form" onSubmit={handleSubmit} method="POST">
      <Form.Row className="homepage-form-row">
        <Col lg={true}>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="email-input"
            onChange={(e) => handleChange(e)}
            required
          />
        </Col>
        <Col lg={true} className="hero-int-btn">
          <Button type="submit" variant="success" className="form-button mb-1">
            Request a demo
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default HomepageHeroForm;
