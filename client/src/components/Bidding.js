import React from "react";
import Header from "./BiddingList/Header";
import ContactForm from "./BiddingList/ContactForm";
import Sider from "./BiddingList/Sider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";

const Bidding = () => {
  return (
    <div className="container" id="top">
      <div className="col-md-7 md-3">
        <Header />
        <ContactForm />
      </div>

      <div className="col-md-2 d-none d-lg-inline float-right">
        <Sider />
      </div>
    </div>
  );
};

export default Bidding;
