import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { videoActions } from "../../../store/video";
import { thumbUrl } from "../../../const/const";
import "./live-list.css";

// install Swiper modules
SwiperCore.use([Navigation]);

const LiveList = ({ liveStreams, getLiveStreams }) => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    if (!liveStreams) {
      getLiveStreams();
    } else {
      setStreams(liveStreams);
    }
  }, [liveStreams]);

  return (
    <>
      <section
        id="tvshow"
        className="iq-main-slider p-0"
        style={{ minHeight: 90 }}
      >
        <div id="prev" className="swiper-button swiper-button-prev">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div id="next" className="swiper-button swiper-button-next">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <Swiper
          slidesPerView={2}
          navigation={{
            prevEl: "#prev",
            nextEl: "#next",
          }}
          loop={true}
          centeredSlides={true}
          id="tvshows-slider"
          className="iq-rtl-direction"
        >
          {streams &&
            Array.isArray(streams) &&
            streams.map((stream, index) => {
              if (index < 5) {
                let thumbnail = null;
                if (stream.thumb1) {
                  thumbnail = thumbUrl + stream.thumb1;
                } else if (stream.thumb2) {
                  thumbnail = thumbUrl + stream.thumb2;
                } else if (stream.thumb3) {
                  thumbnail = thumbUrl + stream.thumb3;
                } else if (stream.thumb4) {
                  thumbnail = thumbUrl + stream.thumb4;
                } else if (stream.logo) {
                  thumbnail = thumbUrl + stream.logo;
                }
                return (
                  <SwiperSlide key={index}>
                    <Link to={"/live-details/" + stream.type + "/" + stream.id}>
                      <div className="shows-img">
                        <div className="poster-div">
                          <img
                            src={
                              thumbnail
                                ? thumbnail
                                : thumbUrl + "/assets/images/logo-sm.png"
                            }
                            alt=""
                          />
                        </div>
                        <div className="shows-content">
                          <h4>{stream.name}</h4>
                          {/* <div className="movie-time d-flex align-items-center">
                            <span className="text-white">
                              {stream.description || stream.alt_name}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              }
            })}
        </Swiper>
      </section>
      <div className="main-content">
        <section id="iq-favorites">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Live</h4>
                </div>
                {streams && Array.isArray(streams) && streams.length > 0 ? (
                  <div id="favorites-contens">
                    <div
                      id="prev1"
                      className="swiper-button swiper-button-prev"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div
                      id="next1"
                      className="swiper-button swiper-button-next"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </div>
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={20}
                      navigation={{
                        prevEl: "#prev1",
                        nextEl: "#next1",
                      }}
                      loop={true}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        550: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                      }}
                      className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                    >
                      {streams.map((stream, index) => {
                        let thumbnail = null;
                        if (stream.thumb1) {
                          thumbnail = thumbUrl + stream.thumb1;
                        } else if (stream.thumb2) {
                          thumbnail = thumbUrl + stream.thumb2;
                        } else if (stream.thumb3) {
                          thumbnail = thumbUrl + stream.thumb3;
                        } else if (stream.thumb4) {
                          thumbnail = thumbUrl + stream.thumb4;
                        } else if (stream.logo) {
                          thumbnail = thumbUrl + stream.logo;
                        }
                        return (
                          <SwiperSlide className="slide-item" key={index}>
                            <Link
                              to={
                                "/live-details/" + stream.type + "/" + stream.id
                              }
                            >
                              <div
                                className="block-images1 block-images position-relative"
                                style={{ borderRadius: 20, overflow: "hidden" }}
                              >
                                <div className="img-box">
                                  <img
                                    src={
                                      thumbnail
                                        ? thumbnail
                                        : thumbUrl +
                                          "/assets/images/logo-sm.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="block-description-live">
                                  <h6 className="iq-title">{stream.name}</h6>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                ) : (
                  <div
                    className="d-block w-100 h-25"
                    style={{
                      height: "200px",
                      textAlign: "center",
                      lineHeight: "200px",
                    }}
                  >
                    No Live Stream
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  liveStreams: state.videos.live,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLiveStreams: () => {
      dispatch(videoActions.getLiveStreams());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(LiveList);
