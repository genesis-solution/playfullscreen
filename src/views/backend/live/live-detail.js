import React, { useEffect, useState, useRef } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//video.js player
import "../../../assets/videojs/skins/shaka/videojs.min.css";
import Hls from "hls.js";
import videojs from "video.js";
import "../../../assets/videojs/components/hlsjs.js";
import "../../../assets/videojs/components/nuevo.js";
import "../../../assets/videojs/components/videojs.events.js";
import { Row, Col } from "react-bootstrap";
import { videoActions } from "../../../store/video";
import Chatbox from "../../../components/Chat/chatbox";
import useScript from "../../../components/Chat/useScript";
// import "../../../assets/chatbox/customize.css";
import { thumbUrl } from "../../../const/const";

const LiveDetails = ({
  getStreamInfo,
  streaminfo,
  clearStreamInfo,
}) => {
  let player = useRef();
  let videoContainer = useRef();
  const history = useHistory();
  
  useEffect(() => {
    const items = document.getElementsByClassName("item-end");
    console.log(items);
    for (let index in items) {
      const item = items[index];
      if (item.nodeName == "DIV") item.style.visibility = "visible";
    }

    const id = history.location.pathname.split("/")[3];
    const type = history.location.pathname.split("/")[2];
    getStreamInfo({ id, type });

    var elements = document.getElementsByClassName("item-end");
    if (elements) {
      elements[0].classList.add("custom-class-css");
    }

    return () => {
      const items = document.getElementsByClassName("item-end");
      console.log(items);
      for (let index in items) {
        const item = items[index];
        if (item.nodeName == "DIV") item.style.visibility = "hidden";
      }
      clearStreamInfo();
      player.dispose();
    };
  }, []);

  useEffect(() => {
    if (streaminfo) {
      if(!streaminfo.purchased) {
        history.push('/pricing-plan?hlsurl='+streaminfo.id+'&type=live');
      } else {
        console.log(streaminfo);
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
              title: streaminfo.name,
              video_id: "This is video Id",
            });

            var callback = function (videojsPlayer, hlsjs) {
              hlsjs.on(Hls.Events.MEDIA_ATTACHED, function (event, data) {
                console.log("Media attached");
              });
            };

            videojs.Html5Hlsjs.addHook("beforeinitialize", callback);
            player.src({
              src: streaminfo.hlsUrl,
              type: "application/x-mpegURL",
              poster: streaminfo.logo || streaminfo.logo_id,
            });
          }
        );
      }
    }
  }, [streaminfo]);

  useEffect(() => {}, [videoContainer]);

  return (
    <>
      {/* <Chatbox /> */}
      {/* <Chatbox /> */}
      <div className="video-container iq-main-slider">
        <video className="video-js vjs-fluid" ref={videoContainer}></video>
      </div>
      <div className="main-content">
        <section className="movie-detail container-fluid">
          <Row>
            <Col lg="12">
              <div className="trending-info season-info g-border">
                <h4 className="mt-0">{streaminfo && streaminfo.name}</h4>
                <p
                  className="trending-dec w-100 mb-0"
                  style={{ paddingLeft: "10px" }}
                >
                  {streaminfo && streaminfo.description}
                </p>
                {streaminfo && streaminfo.broadcaster ? (
                  <Link to={"/broadcaster" + streaminfo.broadcaster.publish_point}>
                    <div
                      className="d-flex align-items-center series mb-4"
                      style={{ marginTop: "10px" }}
                    >
                      {streaminfo.broadcaster.logo_id ? (
                        <img
                          src={thumbUrl + streaminfo.broadcaster.logo_id}
                          className="img-fluid"
                          alt=""
                          style={{ width: 50, height: 50 }}
                        />
                      ) : (
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
                            {streaminfo.broadcaster.name[0]}
                          </div>
                        </div>
                      )}
                      <h5 className="text-gold ml-3">
                        {streaminfo.broadcaster.name}
                      </h5>
                    </div>
                  </Link>
                ) : (
                  <div></div>
                )}

                {streaminfo && streaminfo.team ? (
                  <div
                    className="d-flex align-items-center series mb-4"
                    style={{ marginTop: "10px" }}
                  >
                    {streaminfo.team.logo_id ? (
                      <img
                        src={thumbUrl + streaminfo.team.logo_id}
                        className="img-fluid"
                        alt=""
                        style={{ width: 50, height: 50 }}
                      />
                    ) : streaminfo && streaminfo.team ? (
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
                          {streaminfo.team.name[0]}
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <h5 className="text-gold ml-3">{streaminfo.team.name}</h5>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  streaminfo: state.videos.streaminfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getStreamInfo: (path) => {
      dispatch(videoActions.getStreamInfo(path));
    },
    clearStreamInfo: () => {
      dispatch(videoActions.clearStreamInfo());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  LiveDetails
);
