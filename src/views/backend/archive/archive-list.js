import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { videoActions } from "../../../store/video";
import { thumbUrl } from "../../../const/const";

// install Swiper modules
SwiperCore.use([Navigation]);

const ArchiveList = ({ archiveVideos, getArchiveVideos }) => {
  useEffect(() => {
    if (!archiveVideos) {
      getArchiveVideos();
    }
  }, []);

  return (
    <>
      <section
        id="movieshow"
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
          spaceBetween={0}
          centeredSlides={true}
          navigation={{
            prevEl: "#prev",
            nextEl: "#next",
          }}
          loop={true}
          className=""
        >
          {archiveVideos &&
            archiveVideos.recent &&
            archiveVideos.recent.map((stream, index) => {
              if (index < 5) {
                return (
                  <SwiperSlide key={index}>
                    <Link to={"/archive-details/" + stream.guid}>
                      <div className="shows-img">
                        <div className="poster-div">
                          <img
                            src={thumbUrl + "/images/" + stream.guid + ".png"}
                            className="w-100 img"
                            alt=""
                          />
                        </div>
                        <div className="shows-content">
                          <h4 className="text-white mb-1">{stream.title}</h4>
                          <div className="movie-time d-flex align-items-center">
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
                  <h4 className="main-title">Recent Videos</h4>
                </div>
                {archiveVideos &&
                archiveVideos.recent &&
                archiveVideos.recent.length > 0 ? (
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
                      spaceBetween={20}
                      navigation={{
                        nextEl: "#next1",
                        prevEl: "#prev1",
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
                      {archiveVideos.recent.map((stream, index) => {
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
                                    thumbUrl + "/images/" + stream.guid + ".png"
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="block-description-live">
                                <h6 className="iq-title">                                  
                                    {stream.title}
                                </h6>
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
                    No Streams
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
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Most Viewed</h4>
                </div>
                {archiveVideos &&
                archiveVideos.mostviewed &&
                archiveVideos.mostviewed.length > 0 ? (
                  <div id="upcoming-contens">
                    <div
                      id="prev2"
                      className="swiper-button swiper-button-prev"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div
                      id="next2"
                      className="swiper-button swiper-button-next"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </div>
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={20}
                      navigation={{
                        prevEl: "#prev2",
                        nextEl: "#next2",
                      }}
                      loop={true}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        550: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                      }}
                      className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
                    >
                      {archiveVideos.mostviewed.map((stream, index) => {
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
                    No Streams
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
  archiveVideos: state.videos.archive,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getArchiveVideos: () => {
      dispatch(videoActions.getArchiveVideos());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ArchiveList
);
