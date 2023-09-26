import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Navbar, Dropdown, Form, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../../components/Card'

import { compose } from "redux";
import { connect } from "react-redux";

import CustomToggle from '../../../../components/dropdowns' 

//img

import logo from '../../../../assets/images/logo.png';
import thumb1 from '../../../../assets/images/notify/thumb-1.jpg'
import thumb2 from '../../../../assets/images/notify/thumb-2.jpg'
import thumb3 from '../../../../assets/images/notify/thumb-3.jpg'

import { useSessionContext } from 'supertokens-auth-react/recipe/session'; 
import { signOut } from "supertokens-auth-react/recipe/passwordless";
import { useHistory } from "react-router-dom";
import UserAvatar from '../../../User/useravatar'
import { userActions } from '../../../../store/user';

const HeaderStyle1 = ({getUserInfo, userInfo}) => {
    let session = useSessionContext();
    let user = {};
    const history = useHistory();

    useEffect(() => {
        if (session.loading) {
           return null;
        }
  
        if (!session.doesSessionExist) {
           // TODO
        } else {
           let {userId, accessTokenPayload} = session;
           user = accessTokenPayload.user;
           getUserInfo(user.id);
        }
    }, [session])

    return(
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
                                    <div className="navbar-right menu-right mobile-btn-style">
                                        <ul className="d-flex align-items-center list-inline m-0">
                                            {userInfo?
                                            <Dropdown as="li" className="nav-item nav-icon">
                                                <Dropdown.Toggle href="#" as={CustomToggle} variant="search-toggle">
                                                    <div className="iq-user-dropdown search-toggle p-0 d-flex align-items-center active"
                                                        data-toggle="search-toggle">
                                                            <UserAvatar {...userInfo} className="img-fluid avatar-40 rounded-circle" alt="user" />
                                                    </div>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="iq-sub-dropdown iq-user-dropdown" align="right">
                                                    <Card className="shadow-none m-0">
                                                        <Card.Body className="p-0 pl-3 pr-3">
                                                            <Link to="/setting" className="iq-sub-card setting-dropdown">
                                                                <div className="media align-items-center">
                                                                    <div className="right-icon">
                                                                        <i className="ri-settings-4-line text-primary"></i>
                                                                    </div>
                                                                    <div className="media-body ml-3">
                                                                        <h6 className="my-0 ">Profile Setting</h6>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="/purchase_history" className="iq-sub-card setting-dropdown">
                                                                <div className="media align-items-center">
                                                                    <div className="right-icon">
                                                                        <i className="ri-profile-line text-primary"></i>
                                                                    </div>
                                                                    <div className="media-body ml-3">
                                                                        <h6 className="my-0 ">Purchase History</h6>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="/admission_history" className="iq-sub-card setting-dropdown">
                                                                <div className="media align-items-center">
                                                                    <div className="right-icon">
                                                                        <i className="ri-profile-line text-primary"></i>
                                                                    </div>
                                                                    <div className="media-body ml-3">
                                                                        <h6 className="my-0 ">Admission History</h6>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="#" onClick={async () => { await signOut(); window.location.href = "/"; }} className="iq-sub-card setting-dropdown">
                                                                <div className="media align-items-center">
                                                                    <div className="right-icon">
                                                                        <i className="ri-logout-circle-line text-primary"></i>
                                                                    </div>
                                                                    <div className="media-body ml-3">
                                                                        <h6 className="my-0 ">Logout</h6>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Dropdown.Menu>
                                            </Dropdown>:
                                            <Dropdown as="li" className="nav-item nav-icon">
                                                <button onClick={() => history.push("/auth")} className='btn btn-hover iq-button'>Sign In</button>
                                            </Dropdown>}
                                        </ul>
                                    </div>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>     
        </>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.user.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: userId => {
            dispatch(userActions.getUserInfo(userId));
        },
    };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
    HeaderStyle1
);
