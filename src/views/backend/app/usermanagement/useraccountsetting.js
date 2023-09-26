import React, {useState, useEffect, useRef} from 'react'
import { Container ,Row, Col, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import { compose } from "redux";
import { connect } from "react-redux";

import { useSessionContext } from 'supertokens-auth-react/recipe/session'; 
import UserAvatar from '../../../../components/User/useravatar';

import { userActions } from "../../../../store/user";

import Axios from 'axios';
import { toast } from 'react-toast'
import PopUp from '../../../../components/Modal/pricepicker';

const UserAccountSetting = ({getUserInfo, setUserInfo, userInfo, status}) => {
   let user = {};
   let session = useSessionContext();
   const history = useHistory();

   const inputFile = useRef(null);
   // const states = [
   //     { value: 'S' },
   //     { value: 'M' },
   //     { value: 'F' }
   //   ] 
   // set value for default selection
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPhone, setUserPhone] = useState('');
   const [userAvatar, setUserAvatar] = useState('');
   const [uploadFile, setUploadFile] = useState({currentFile: undefined, previewImage: undefined, progress: 0, message: '', imageInfos: []});
   const [showPopUp, setShowPopUp] = useState(false);

   const handleShowPopUp = () => {
      setShowPopUp(true);
   }

   const handleClosePopUp = () => {
      setShowPopUp(false);
   }

   const handleChoose = (amount) => {
      history.push(`/purchase?type=topup&amount=${amount}`);
   }

   const selectFile = (event) => {
      setUploadFile({currentFile: event.target.files[0], previewImage: URL.createObjectURL(event.target.files[0]), progress: 0, message: '' });
      setUserAvatar(URL.createObjectURL(event.target.files[0]))
   }

   const updateUserData = (avatar) => {
      let userData;
      if(avatar) userData = { name: userName, email: userEmail, phone: userPhone, avatar };
      else userData = { name: userName, email: userEmail, phone: userPhone, avatar: userAvatar };
      setUserInfo(userData);
   }

   const saveUser = async (event) => {
      if(uploadFile['currentFile']){
         const formData = new FormData();
         formData.append('file', uploadFile['currentFile']);
         formData.append('upload_preset', 'mypreset');
         formData.append('cloud_name', 'ddxnzgmzx');
         await Axios.post('https://api.cloudinary.com/v1_1/ddxnzgmzx/image/upload', formData)
               .then(resp => {
                  const secure_url = resp.data['secure_url'];
                  console.log('dt', secure_url);
                  updateUserData(secure_url);
               });
      } else {
         updateUserData(null)
      }
   }

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

   useEffect(() => {
      if(userInfo) {
         setUserName(userInfo.name || '')
         setUserEmail(userInfo.email || '')
         setUserPhone(userInfo.phone || '')
         setUserAvatar(userInfo.avatar)
      }
      
   }, [userInfo])

   useEffect(() => {
      if(status == "update_user_request_success") {
         toast('User data updated successfully', {
            backgroundColor: '#206eff',
            color: '#ffffff',
         })
      } else if(status == "update_user_request_fail") {
         toast.error("Something wrong happened, try again")
      }
   }, [status])

    return (
      <>
         <section className="m-profile setting-wrapper">   
            <Container>
               {showPopUp && <PopUp title="Deposit PF" handleClose={handleClosePopUp} handleChoose={handleChoose} />}
               <h4 className="main-title mb-4">Account Setting</h4>
                  <Row>
                     <Col lg="4" className="mb-3">
                        <div className="sign-user_card text-center">
                           <UserAvatar email={userEmail} phone={userPhone} avatar={userAvatar} className="rounded-circle img-fluid d-block mx-auto mb-3" alt="user" />
                           <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={selectFile}/>
                           <Link to="#" className="edit-icon text-primary" onClick={() => inputFile.current.click()}>Edit</Link>
                        </div>
                     </Col>
                     <Col lg="8">
                        <div className="sign-user_card">
                           <h5 className="mb-3 pb-3 a-border">Personal Details</h5>
                           <Row className="row align-items-center justify-content-between mb-3">
                              <Col md="8">
                                 <span className="text-light font-size-13">Name</span>
                                 <Form.Control type="text" className="form-control mb-0" id="exampleInputl1" placeholder="Enter Your Name" autoComplete="off" value={userName} onChange={e => setUserName(e.target.value)} required/>
                              </Col>
                           </Row>
                           <Row className="row align-items-center justify-content-between mb-3">
                              <Col md="8">
                                 <span className="text-light font-size-13">Email</span>
                                 <Form.Control type="text" className="form-control mb-0" id="exampleInputl2" placeholder="Enter Your Email" autoComplete="off" value={userEmail} onChange={e => setUserEmail(e.target.value)} required/>
                              </Col>
                           </Row>
                           <Row className="align-items-center justify-content-between mb-3">
                              <Col md="8">
                                 <span className="text-light font-size-13">Phone</span>
                                 <Form.Control type="text" className="form-control mb-0" id="exampleInputl3" placeholder="Enter Your Phone" autoComplete="off" value={userPhone} onChange={e => setUserPhone(e.target.value)} required/>
                              </Col>
                           </Row>
                           <h5 className="mb-3 mt-4 pb-3 a-border">Billing Details</h5>
                           <Row className="justify-content-between mb-3">
                              <Col md="8" className="r-mb-15">
                                 <p>Your PF balance: {userInfo && userInfo.pf_balance ? userInfo.pf_balance : ""}</p>
                              </Col>
                              <div className="col-md-4 text-md-right text-left">
                                 <Link to="#" className="text-primary" onClick={handleShowPopUp}>Deposit PF</Link>
                              </div>
                           </Row>
                           <Row className="justify-content-between mb-3">
                              <Col md="8" className="r-mb-15">
                                 <Link to="#" className="btn btn-hover" onClick={saveUser}>Save</Link>
                                 <Link to="#" className="btn btn-link" onClick={history.goBack}>Cancel</Link>
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


const mapStateToProps = (state) => ({
   userInfo: state.user.user,
   status: state.user.status
});
 
const mapDispatchToProps = (dispatch) => {
   return {
      getUserInfo: userId => {
         dispatch(userActions.getUserInfo(userId));
      },
      setUserInfo: (user)=> {
         dispatch(userActions.updateUser(user));
      }
   };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
   UserAccountSetting
);
