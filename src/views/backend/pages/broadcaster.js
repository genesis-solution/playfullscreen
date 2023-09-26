import React from 'react'
import { Container, Row, Col, Navbar, Dropdown, Form, Nav } from 'react-bootstrap'
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import FooterStyle from '../../../components/partials/backend/footerstyle/footerstyle'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
export default function Broadcaster() {
    return (
        <>
            <header id="main-header">
                <div className="main-header">
                    <Container fluid>
                        <Row>
                            <Col sm="12">
                                <Navbar expand="lg" className="p-0">
                                    <Navbar.Toggle className="c-toggler">
                                        <div className="navbar-toggler-icon"  >
                                            <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                                            <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                                            <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                                        </div>
                                    </Navbar.Toggle>
                                    <Navbar.Brand className="navbar-brand" href="/">
                                        <img className="img-fluid logo" src={logo} alt="playfullscreen" />
                                    </Navbar.Brand>

                                    <Navbar.Collapse className="">
                                        <div className="menu-main-menu-container">
                                            <Nav as="ul" id="top-menu" className="ml-auto">
                                                <li className="menu-item">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/archive">Archive</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/live">Live</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/upcoming">Upcoming</Link>
                                                </li>

                                            </Nav>
                                        </div>
                                    </Navbar.Collapse>

                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <section className='banner-image'>
                <div className='banner-inner-sec'>
                    <p className='text-p1'>BCEHL HOCKEY</p>
                    <p className='text-p2'> <Link to="/">Home</Link> > BCEHL HOCKEY</p>
                </div>
            </section>


            {/* <section
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
                    className="slider m-0 p-0"
                >

                    <SwiperSlide className="slide slick-bg s-bg-1" >
                        <Container
                            fluid
                            className="position-relative h-100 background-upcoming"
                        >
                            <div className="shows-img">
                                <div className="poster-div">
                                    <img
                                        src="../"
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
                                                test
                                            </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide className="slide slick-bg s-bg-1" >
                        <Container
                            fluid
                            className="position-relative h-100 background-upcoming"
                        >
                            <div className="shows-img">
                                <div className="poster-div">
                                    <img
                                        src="../"
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
                                                test1
                                            </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </SwiperSlide>

                </Swiper>
            </section> */}

            <div className="main-content">
                <section id="iq-favorites">
                    <Container fluid>
                        <Row>
                            <Col sm="12" className="overflow-hidden">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="main-title">Live</h4>
                                    <Link className="iq-view-all" to="#">
                                        View All
                                    </Link>
                                </div>

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

                                        <SwiperSlide className="slide-item" >
                                            <Link
                                                to={
                                                    "/live-details/"
                                                }
                                            >
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title"> stream name</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link
                                                to={
                                                    "/live-details/"
                                                }
                                            >
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title"> stream name</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link
                                                to={
                                                    "/live-details/"
                                                }
                                            >
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title"> stream name</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link
                                                to={
                                                    "/live-details/"
                                                }
                                            >
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title"> stream name</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>

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
                                    <Link className="iq-view-all" to="#">
                                        View All
                                    </Link>
                                </div>

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

                                        <SwiperSlide className="slide-item" >
                                            <Link to={"/archive-details/"}>
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title">stream 1</h6>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <span className="text-white">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link to={"/archive-details/"}>
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title">stream 1</h6>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <span className="text-white">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link to={"/archive-details/"}>
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title">stream 1</h6>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <span className="text-white">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link to={"/archive-details/"}>
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title">stream 1</h6>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <span className="text-white">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item" >
                                            <Link to={"/archive-details/"}>
                                                <div
                                                    className="block-images1 block-images position-relative"
                                                    style={{ borderRadius: 20, overflow: "hidden" }}
                                                >
                                                    <div className="img-box">
                                                        <img
                                                            src=""
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="block-description-live">
                                                        <h6 className="iq-title">stream 1</h6>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <span className="text-white">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>



            <FooterStyle />
        </>
    )
}
