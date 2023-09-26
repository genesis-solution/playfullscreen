import React,{useState, useEffect} from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import footer1 from '../../../../assets/images/footer/01.jpg'
import footer2 from '../../../../assets/images/footer/02.jpg'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {rtlModeAction, getRtlMode} from '../../../../store/mode/rtlmode'


const mapStateToProps = (state) => {
    return {
        rtlMode: getRtlMode(state)
    };


}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            rtlModeAction
        },
        dispatch
    )
})

const FooterStyle = (props) =>{


    return(
        <>
            
            <footer id="contact" className="footer-one iq-bg-dark">
                <div className="footer-top">
                    <Container fluid>
                        <Row className="footer-standard">
                            <Col lg="7">
                                <div className="widget text-left">
                                    <div className="menu-footer-link-1-container">
                                        <ul id="menu-footer-link-1" className="menu p-0">
                                            <li id="menu-item-7314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314">
                                                <Link to="/terms-of-service">Terms Of Use</Link>
                                            </li>
                                            <li id="menu-item-7316" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
                                                <Link to="/privacy-policy">Privacy-Policy</Link>
                                            </li>
                                            <li id="menu-item-7118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            {/* <li id="menu-item-7118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                                                <Link to="/extra-pages/watch-video">Watch List</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget text-left">			
                                    <div className="textwidget">
                                        <p><small>© 2021 Playfullscreen. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Playfullscreen Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</small></p>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col lg="2" md="6" className="mt-4 mt-lg-0">
                                <h6 className="footer-link-title">
                                    Follow Us :
                                </h6>
                                <ul className="info-share"> 
                                    <li><Link target="_blank" to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link target="_blank" to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link target="_blank" to="#"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link target="_blank" to="#"><i className="fa fa-github"></i></Link></li>
                                </ul>
                            </Col> */}
                            {/* <Col lg="3" md="6" className="mt-4 mt-lg-0">
                                <div className="widget text-left">
                                    <div className="textwidget">
                                        <h6 className="footer-link-title">Playfullscreen</h6>
                                        <div className="d-flex align-items-center">
                                            <Link className="app-image" to="#">
                                                <img src={footer1} alt="play-store"/>
                                            </Link><br/>
                                            <Link className="ml-3 app-image" to="#"><img src={footer2} alt="app-store"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default  connect(mapStateToProps, mapDispatchToProps)(FooterStyle)