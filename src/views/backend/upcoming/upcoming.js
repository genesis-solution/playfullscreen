import React, { useState, useRef, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

//video.js player
import "../../../assets/videojs/skins/shaka/videojs.min.css";
import "../../../assets/videojs/components/hlsjs.js";
import "../../../assets/videojs/components/nuevo.js";

import { Container, Col, Row } from "react-bootstrap";
import FsLightbox from "fslightbox-react";
import { videoActions } from "../../../store/video";
import { thumbUrl } from "../../../const/const";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

const UpcomingList = ({ upcomingStreams, getUpcomingStreams }) => {
  const [selectedStream, setSelectedStream] = useState({});

  useEffect(() => {
    if (!upcomingStreams) {
      getUpcomingStreams();
    }
  }, [upcomingStreams]);

  const [toggler, setToggler] = useState(false);

  let playerForTrailer = useRef();

  function setupVideoPlayerForTrailer() {
    setTimeout(() => {
      playerForTrailer.current.src = selectedStream.embedUrl;
    }, 500);
  }

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          <div>
            <iframe
              width="100%"
              style={{ aspectRatio: "16/9", minHeight: "480px" }}
              allow="autoplay"
              frameBorder={0}
              ref={playerForTrailer}
            ></iframe>
          </div>,
        ]}
        onOpen={setupVideoPlayerForTrailer}
      />
      <section
        id="home"
        className="iq-main-slider p-0 iq-rtl-direction"
        style={{ minHeight: 90 }}
      >
        <div id="prev5" className="swiper-button swiper-button-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div id="next5" className="swiper-button swiper-button-next">
          <i className="fa fa-chevron-right"></i>
        </div>

        <Swiper
          navigation={{
            prevEl: "#prev5",
            nextEl: "#next5",
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          id="upcoming-slider"
          className="slider m-0 p-0"
        >
          {upcomingStreams &&
            Array.isArray(upcomingStreams) &&
            upcomingStreams.map((stream, index) => {
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
                <SwiperSlide className="slide slick-bg s-bg-1" key={index}>
                  <Container
                    fluid
                    className="position-relative h-100 background-upcoming"
                  >
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
                    </div>
                    <div
                      className="slider-inner h-100"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        paddingLeft: 120,
                        paddingRight: 120,
                        zIndex: 1,
                      }}
                    >
                      <Row className="align-items-center  iq-ltr-direction h-100">
                        <Col xl="6" lg="12" md="12" className="h-100">
                          <div style={{ position: "absolute", bottom: 0 }}>
                            <h2
                              className="slider-text big-title title text-uppercase"
                              data-iq-gsap="onStart"
                              data-iq-position-x="-200"
                            >
                              {stream.name}
                            </h2>
                            <div
                              className="d-flex align-items-center text-white text-detail"
                              style={{ margin: 5 }}
                            >
                              <span
                                className="text-white"
                                style={{ display: "block", fontSize: 18 }}
                              >
                                {new Date(parseInt(stream.start_date)).toLocaleString()}
                              </span>
                              <span
                                style={{
                                  marginLeft: 5,
                                  marginRight: 5,
                                  fontSize: 18,
                                }}
                              >
                                -
                              </span>
                              <span
                                className="text-white"
                                style={{ display: "block", fontSize: 18 }}
                              >
                                {new Date(parseInt(stream.expiry_date)).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
      <div className="main-content">
        <section>
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Upcoming ...</h4>
                </div>
                {upcomingStreams &&
                Array.isArray(upcomingStreams) &&
                upcomingStreams.length > 0 ? (
                  <div id="upcoming-contens">
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
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        550: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                      }}
                      navigation={{
                        prevEl: "#prev1",
                        nextEl: "#next1",
                      }}
                      loop={true}
                      slidesPerView={4}
                      spaceBetween={20}
                      as="ul"
                      className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                    >
                      {upcomingStreams &&
                        Array.isArray(upcomingStreams) &&
                        upcomingStreams.map((stream, index) => {
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
                            <SwiperSlide as="li" key={index}>
                              <div
                                className=" block-images position-relative"
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
                                <div
                                  className="block-description-upcoming"
                                  style={{ display: "block" }}
                                >
                                  <h6 className="iq-title">{stream.name}</h6>
                                  <div className="d-flex">
                                    <span
                                      className="text-white"
                                      style={{ display: "block" }}
                                    >
                                      {new Date(parseInt(stream.start_date)).toLocaleString()}
                                    </span>
                                    <span
                                      style={{ marginLeft: 5, marginRight: 5 }}
                                    >
                                      {" "}
                                      -{" "}
                                    </span>
                                    <span
                                      className="text-white"
                                      style={{ display: "block" }}
                                    >
                                      {new Date(parseInt(stream.expiry_date)).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
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
                    No Upcoming Stream
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
  upcomingStreams: state.videos.upcoming,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUpcomingStreams: () => {
      dispatch(videoActions.getUpcomingStreams());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UpcomingList
);
