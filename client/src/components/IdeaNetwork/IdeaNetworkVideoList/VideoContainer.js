import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Icofont from "react-icofont";
import { withRouter } from "react-router";

import VideoEmbed90 from "../../VideoEmbed90";
import "./VideoContainer.scss";

class VideoContainer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedItem: {},
    };
  }
  viewProfile(id, firstname, lastname) {
    let slug = firstname + "-" + lastname;
    this.props.history.push(`/creative-profile/${id}/${slug}`);
    // this.setState({ showModal: true, selectedItem: data })
  }

  render() {
    const { ideas, history } = this.props;
    const { showModal, selectedItem } = this.state;
    return (
      <div className="container-fluid d-flex flex-wrap justify-content-around">
        {ideas?.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <div className="d-flex flex-column m-2 mb-4 video-description ">
                <div className="m-0 p-2 d-flex justify-content-between align-items-center">
                  <div>
                    <b>
                      &nbsp;&nbsp;{data.creator.firstname}{" "}
                      {data.creator.lastname.charAt(0)}.
                    </b>
                  </div>
                  <div>
                    <Button
                      className="btn-xs mr-3 vp-big-btn"
                      onClick={() =>
                        this.viewProfile(
                          data._id,
                          data?.creator?.firstname.toLowerCase(),
                          data?.creator?.lastname.toLowerCase()
                        )
                      }
                    >
                      View Portfolio &nbsp;
                      <Icofont size="1" icon="play-alt-1" />
                    </Button>
                    <Button
                      className="btn-xs sl-big-btn"
                      variant="success"
                      onClick={() =>
                        this.setState({ showModal: true, selectedItem: data })
                      }
                    >
                      Add to Shortlist &nbsp;
                      <Icofont size="1" icon="ui-add" />
                    </Button>
                    <Button
                      className="btn-xs mr-3 d-inline d-sm-none"
                      onClick={() =>
                        this.setState({ showModal: true, selectedItem: data })
                      }
                    >
                      <Icofont size="1" icon="play-alt-1" />
                    </Button>
                    <Button
                      className="btn-xs d-inline d-sm-none"
                      variant="success"
                      onClick={() =>
                        this.setState({ showModal: true, selectedItem: data })
                      }
                    >
                      <Icofont size="1" icon="ui-add" />
                    </Button>
                  </div>
                </div>
                <VideoEmbed90 videoLink={data.embedLink} />
                <div className="mx-3">
                  <div className="py-2 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold">
                      {data.client} | {data.title}
                    </h4>
                    <p className="gray">{data.budget}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <Modal
          show={showModal}
          onHide={() =>
            this.setState({
              showModal: false,
            })
          }
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <p>
              Get in touch with us to learn more about{" "}
              <b>{selectedItem?.creator?.firstname}</b> and get started on a
              project.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => history.push("/get-started")}
            >
              Contact <b>{selectedItem?.creator?.firstname}</b> Now!
            </Button>
            <Button
              onClick={() =>
                this.setState({
                  showModal: false,
                })
              }
              variant="secondary"
            >
              Return
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withRouter(VideoContainer);
