import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

import VideoSlider from "../components/VideoSlider";
import profile from "../assets/profile.png";
import logo from "../assets/cr-logo.png";

import { getIdeasById, getCreatorById } from "../api";

class CreativeProfile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      buttonClicked: false,
      embed: [],
      loader: false
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.setState({
      loader: true
    });

    const paramId = this.props.match.params.id;
    axios.get(`${getIdeasById}/${paramId}`).then((res) => {
      this.setState({
        data: [res.data],
        loader: false
      });
      axios
        .get(`${getCreatorById}/${res.data.creator._id}`)
        .then((res) => {
          console.log(res, "---resposne");
          this.setState({
            embed: res.data
          });
        })
        .catch((err) => console.log(err, "emb"));
    });
  }

  getDetails() {
    if (!this.state.buttonClicked) {
      this.setState({
        buttonClicked: true
      });
    }
  }

  render() {
    return (
      <div
        id="crProfile"
        style={{ height: this.state.loader ? "35vh" : "100%" }}
      >
        {this.state.loader && <div class="spinner-border text-muted"></div>}

        {this.state.data?.map((item) => {
          return (
            <div className="container">
              <div className="logo">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="header">
                <div className="d-flex align-items-center">
                  <img
                    src={item?.creator?.photo ? item?.creator?.photo : profile}
                    alt="profile"
                    className="cr-profile-img"
                  />
                  <h4 className="ml-3">
                    {item.creator?.firstname} {item.creator?.lastname}
                  </h4>
                </div>
                {/* <a
                  className="btn btn-primary"
                  onClick={(e) => {
                    window.location =
                      "mailto:max.mustermann@example.com?body=My custom mail body";
                    e.preventDefault();
                  }}
                  style={{ color: "#fff !important" }}
                >
                  Contact Creative
                </a> */}
              </div>
              <div className="row mt-4">
                <div className="col-lg-4 col-12">
                  {/* mobile-view */}
                  <div className="indl">
                    <div>
                      <h5>Industry</h5>
                      <h4>{item?.industry[0]}</h4>
                    </div>
                    <div className="br"></div>
                    <div className="ml-3">
                      <h5>Location</h5>
                      <h4>{item?.location[0]}</h4>
                    </div>
                  </div>
                  {/* end */}
                  <div className="cr-desc">
                    <p>{item.creator.bio}</p>
                    <hr></hr>
                  </div>
                  <div className="tags">
                    <div className="d-flex flex-wrap align-items-center">
                      <h4>Industry:</h4>
                      {item?.creator?.industry.length > 0 ? (
                        item?.creator?.industry?.map((industry) => {
                          return (
                            <button className="tag-btn">{industry}</button>
                          );
                        })
                      ) : (
                        <button className="tag-btn">N/A</button>
                      )}
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h4>Area of Expertise:</h4>
                      {item?.creator?.expertise?.length > 0 ? (
                        item?.creator?.expertise?.map((expert) => {
                          return <button className="tag-btn">{expert}</button>;
                        })
                      ) : (
                        <button className="tag-btn">N/A</button>
                      )}
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h4>Location:</h4>
                      {item?.location?.map((loc, ind) => {
                        return (
                          <button className="tag-btn" key={ind}>
                            {loc}
                          </button>
                        );
                      })}
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h4>Language:</h4>
                      {item?.creator?.language.length > 0 ? (
                        item?.creator?.language?.map((lang) => {
                          return <button className="tag-btn">{lang}</button>;
                        })
                      ) : (
                        <button className="tag-btn">N/A</button>
                      )}
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h4>Clients:</h4>
                      {item?.creator?.client.length > 0 ? (
                        item?.creator?.client?.map((client) => {
                          return <button className="tag-btn">{client}</button>;
                        })
                      ) : (
                        <button className="tag-btn">N/A</button>
                      )}
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h4>Budget Range:</h4>
                      <button className="tag-btn">
                        {item?.creator?.price}
                      </button>
                    </div>
                  </div>
                  <small>
                    We define Budget Range as typical range of budgets when
                    working with this creator on a project. We denote 0-15K USD
                    as “$”, 16-80K USD as “$$”, and 80K+ as “$$$”
                  </small>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="slider-view">
                    <h1 className="mb-4">Work</h1>
                    <VideoSlider
                      data={this.state.data}
                      embed={this.state.embed}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(CreativeProfile);
