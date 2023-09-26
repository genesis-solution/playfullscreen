import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Form } from 'react-bootstrap'
// import Choices from 'react-choices'
// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//select
import Select from 'react-select';
import user from '../../../../assets/images/user/user.jpg'
import axios from "axios";
import { useSessionContext } from 'supertokens-auth-react/recipe/session'; 
import UserAvatar from '../../../../components/User/useravatar';

import { useHistory } from "react-router-dom";

export function getApiDomain() {
    const apiUrl = process.env.REACT_APP_API_URL || `https://api.playfullscreen.a2hosted.com`;
    return apiUrl;
}

const UserProfile = () => {
    let user = {};
    let session = useSessionContext();
    const history = useHistory();

    const [date, setDate] = useState(new Date());
    const handleChange3 = date => setDate(date);
    // const states = [
    //     { value: 'S' },
    //     { value: 'M' },
    //     { value: 'F' }
    //   ] 
    // set value for default selection
    const [selectedValue, setSelectedValue] = useState([]);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        if (session.loading) {
            return null;
        }
    
        if (!session.doesSessionExist) {
            // TODO
        } else {
            let {userId, accessTokenPayload} = session;
            user = accessTokenPayload.user;
            console.log(accessTokenPayload)
            setUserName(user.name)
            setUserEmail(user.email)
            setUserPhone(user.phone)
            setUserAvatar(user.avatar)

        }
    }, [session])
    
    // handle onChange event of the dropdown
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    return (
        <>
            <section className="m-profile manage-p">
                <Container>
                    <Row className="row align-items-center justify-content-center h-100">
                        <Col lg="10">
                            <div className="sign-user_card">
                                <Row>
                                    <Col lg="2">
                                        <div className="upload_profile d-inline-block">
                                            <UserAvatar email={userEmail} phone={userPhone} avatar={userAvatar} className="profile-pic avatar-130 rounded-circle img-fluid" alt="user" />
                                            <div className="p-image">
                                                <i className="ri-pencil-line upload-button"></i>
                                                <input className="file-upload" type="file" accept="image/*"/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="10" className="device-margin">
                                        <div className="profile-from">
                                            <h4 className="mb-3">Manage Profile</h4>
                                            <Form className="mt-4" action="#">
                                                <Form.Group className="form-group">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" className="form-control mb-0" id="exampleInputl1"
                                                        placeholder="Enter Your Name" autoComplete="off" value={userName} required/>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" className="form-control mb-0" id="exampleInputl2"
                                                        placeholder="Enter Your Email" autoComplete="off" value={userEmail} required/>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control type="text" className="form-control mb-0" id="exampleInputl3"
                                                        placeholder="Enter Your Phone" autoComplete="off" value={userPhone} required/>
                                                </Form.Group>
                                                <div className="d-flex">
                                                    <Link to="#" className="btn btn-hover">Save</Link>
                                                    <Link to="#" className="btn btn-link" onClick={history.goBack}>Cancel</Link>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>          
            </section>
        </>
    )
}

export default UserProfile