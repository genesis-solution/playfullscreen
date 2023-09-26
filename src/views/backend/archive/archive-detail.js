import React, { useEffect, useRef } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

//video.js player
import "../../../assets/videojs/skins/shaka/videojs.min.css";
import Hls from "hls.js";
import videojs from "video.js";
import "../../../assets/videojs/components/hlsjs.js";
import "../../../assets/videojs/components/nuevo.js";
import "../../../assets/videojs/components/videojs.events.js";

import { videoActions } from "../../../store/video";

import { thumbUrl } from "../../../const/const";

// install Swiper modules
SwiperCore.use([Navigation]);

const ArchiveDetails = ({
  archiveinfo,
  getArchiveInfo,
  clearArchiveInfo,
}) => {
  let player = useRef();
  let videoContainer = useRef();

  const history = useHistory();

  useEffect(() => {
    const currentUrl = window.location.href;
    const id = currentUrl.split('/').pop();
    
    getArchiveInfo({ id, type:'archive' });
    return () => {
      if (archiveinfo) {
        player.dispose();
      }
      clearArchiveInfo();
    };
  }, []);

  useEffect(() => {
    if (archiveinfo) {
      if (!archiveinfo.purchased) {
        history.push('/pricing-plan?hlsurl='+archiveinfo.hlsUrl+'&type=archive');
      }
      else
      {
        player = videojs(
          videoContainer.current,
          {
            controls: true,
            preload: true,
            playsinilie: true,
            autoplay: true,
          },
          function onPlayerReady() {
            console.log("Player Ready!");
            player.nuevo({
              title: archiveinfo.name,
              video_id: "This is video Id",
            });

            var callback = function (videojsPlayer, hlsjs) {
              hlsjs.on(Hls.Events.MEDIA_ATTACHED, function (event, data) {
                console.log("Media attached");
              });
            };

            videojs.Html5Hlsjs.addHook("beforeinitialize", callback);
            player.src({
              src: archiveinfo.hlsUrl,
              type: "application/x-mpegURL",
              poster: archiveinfo.poster,
            });
          }
        );
      }
    }
  }, [archiveinfo]);

  return (
    <>
      <div className="video-container iq-main-slider">
        <video className="video-js vjs-fluid" ref={videoContainer}></video>
      </div>
      <div className="main-content movi">
        <section className="movie-detail container-fluid">
          <Row>
            <Col lg="12">
              <div className="trending-info g-border text-uppercase">
                <h4 className="mt-0">{archiveinfo && archiveinfo.title}</h4>
                <p className="trending-dec w-100 mb-0">
                  {archiveinfo && archiveinfo.description}
                </p>
                <div className="d-flex align-items-center text-white text-detail">
                  <span className="ml-3">
                    {archiveinfo &&
                      new Date(archiveinfo.length * 1000)
                        .toISOString()
                        .slice(11, 19)}
                  </span>
                </div>
                <div className="d-flex align-items-center series mb-4">
                  {archiveinfo &&
                  archiveinfo.broadcaster &&
                  archiveinfo.broadcaster.logo_id ? (
                    <img
                      src={thumbUrl + archiveinfo.broadcaster.logo_id}
                      className="img-fluid"
                      alt=""
                      style={{ width: 50, height: 50 }}
                    />
                  ) : archiveinfo && archiveinfo.broadcaster ? (
                    <div style={{ width: 50, height: 50 }}>
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#F3F6F9",
                          borderRadius: 5,
                          color: "#45CB85",
                        }}
                      >
                        {archiveinfo &&
                          archiveinfo.broadcaster &&
                          archiveinfo.broadcaster.name[0]}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <h5 className="text-gold ml-3">
                    {archiveinfo &&
                      archiveinfo.broadcaster &&
                      archiveinfo.broadcaster.name}
                  </h5>
                </div>                
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  archiveinfo: state.videos.archiveinfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getArchiveInfo: (path) => {
      dispatch(videoActions.getArchiveInfo(path));
    },
    clearArchiveInfo: () => {
      dispatch(videoActions.clearArchiveInfo());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ArchiveDetails
);
