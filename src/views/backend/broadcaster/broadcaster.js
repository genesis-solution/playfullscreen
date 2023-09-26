import React, { useState, useRef, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

//video.js player
import "../../../assets/videojs/skins/shaka/videojs.min.css";
import "../../../assets/videojs/components/hlsjs.js";
import "../../../assets/videojs/components/nuevo.js";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import FsLightbox from "fslightbox-react";

import { videoActions } from "../../../store/video";
import { thumbUrl } from "../../../const/const";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

const gsapAnimate = {
  getData: (elem) => {
    const option = {
      opacity: 0,
      scale: 1,
      position: {
        x: 0,
        y: 0,
      },
      ease: "",
      duration: 1,
      delay: 0.4,
      rotate: 0,
    };
    if (elem !== undefined) {
      option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0);

      option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0);

      option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

      option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

      option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

      option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

      option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5);

      option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");

      const setOption = {
        opacity: option.opacity,
        scale: option.scale,
        x: option.position.x,
        y: option.position.y,
        ease: option.ease,
        rotate: option.rotate,
        duration: option.duration,
        delay: option.delay,
      };

      return setOption;
    } else {
      return { opacity: 0 };
    }
  },
  onStart: (elem) => {
    const setOption = gsapAnimate.getData(elem);

    gsap.from(elem, setOption);
  },

  onEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);

    gsap.to(elem, setOption);
  },

  onStartEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);

    const setEndOption = gsapAnimate.getData(elem);

    setEndOption.opacity = 1;

    setEndOption.x = 0;

    setEndOption.y = 0;

    setEndOption.rotate = 0;

    setEndOption.scale = 1;

    gsap.fromTo(elem, setOption, setEndOption);
  },
  validValue: (attr, defaultVal) => {
    if (attr !== undefined && attr !== null) {
      return Number(attr);
    }
    return Number(defaultVal);
  },
};

const BroadcasterPage = ({
  history,
  getBroadcasterVideos,
  broadcasterVideos,
}) => {
  const [toggler, setToggler] = useState(false);
  const [selectedStream, setSelectedStream] = useState({});

  useEffect(() => {
    const publish_point = history.location.pathname.split("/")[2];
    getBroadcasterVideos("/" + publish_point);
  }, []);

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
          <div style={{ width: "640px", height: "480px" }}>
            <video
              className="video-js vjs-fluid"
              ref={playerForTrailer}
            ></video>
          </div>,
        ]}
        onOpen={setupVideoPlayerForTrailer}
      />
      <section
        id="broadcasterVideos"
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
          className="slider m-0 p-0"
        >
          {broadcasterVideos &&
            broadcasterVideos.upcoming &&
            broadcasterVideos.upcoming.map((stream, index) => {
              if (index < 3) {
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
                        <Row className="align-items-center  iq-ltr-direction h-100 ">
                          <Col xl="6" lg="12" md="12" className="h-100">
                            <div style={{ position: "absolute", bottom: 0 }}>
                              <h1
                                className="slider-text big-title title text-uppercase"
                                data-iq-gsap="onStart"
                                data-iq-position-x="-200"
                              >
                                {stream.name}
                              </h1>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Container>
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
                  <Link className="iq-view-all" to="/live">
                    View All
                  </Link>
                </div>
                {broadcasterVideos &&
                broadcasterVideos.live &&
                broadcasterVideos.live.length > 0 ? (
                  <div id="favorites-contens">
                    <div id="prev" className="swiper-button swiper-button-prev">
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div id="next" className="swiper-button swiper-button-next">
                      <i className="fa fa-chevron-right"></i>
                    </div>
                    <Swiper
                      navigation={{
                        prevEl: "#prev",
                        nextEl: "#next",
                      }}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        550: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                      }}
                      loop={true}
                      slidesPerView={4}
                      spaceBetween={20}
                      as="ul"
                      className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                    >
                      {broadcasterVideos.live.map((stream, index) => {
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
        <section id="iq-upcoming-movie">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="main-title">Archive</h4>
                  <Link className="iq-view-all" to="/movie-category">
                    View All
                  </Link>
                </div>
                {broadcasterVideos &&
                broadcasterVideos.archive &&
                broadcasterVideos.archive.length > 0 ? (
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
                      {broadcasterVideos.archive.map((stream, index) => {
                        return (
                          <SwiperSlide className="slide-item" key={index}>
                            <Link to={"/archive-details/" + stream.guid}>
                              <div
                                className="block-images1 block-images position-relative"
                                style={{ borderRadius: 20, overflow: "hidden" }}
                              >
                                <div className="img-box">
                                  <img
                                    src={
                                      thumbUrl +
                                      "/images/" +
                                      stream.guid +
                                      ".png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="block-description-live">
                                  <h6 className="iq-title">{stream.title}</h6>
                                  <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">
                                      {new Date(stream.length * 1000)
                                        .toISOString()
                                        .slice(11, 19)}
                                    </span>
                                  </div>
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
                    No Archive Stream
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
  broadcasterVideos: state.videos.broadcaster_videos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBroadcasterVideos: (publish_point) => {
      dispatch(videoActions.getBroadcasterVideos(publish_point));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  BroadcasterPage
);
