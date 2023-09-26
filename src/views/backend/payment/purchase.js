import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { Spinner, TrinitySpinner } from 'loading-animations-react';
import { useLocation, useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import coin_logo from '../../../assets/images/coinos_logo.png';
import lightning_qr from '../../../assets/images/lightning_qr.png';
import lightning_sat from '../../../assets/images/lightning_sat_logo.png';
import {baseurl , STRIPE_KEY} from '../../../const/const';

const Purchase = () => { 
    const [paymentRequest, setPaymentRequest] = useState('');
    const [rHash, setRHash] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [rate, setRate] = useState(0);
    const [copyText, setCopyText] = useState('ri-file-copy-line');
    const [coinUser, setCoinUser] = useState({});
    const [isDireactPay, setIsDireactPay] = useState(false);
    const [isCoinLogin, setIsCoinLogin] = useState(false);
    const [isCoinLoginFailed, setIsCoinLoginFailed] = useState(false);
    const [isCoinLoggedin, setIsCoinLoggedin] = useState(false);
    const [isCoinConfirm, setIsCoinConfirm] = useState(false);
    const [isCoinConfirmed, setIsCoinConfirmed] = useState(0);

    const [cointoken, setCointoken] = useState('');
    const [satsAmount, setSatsAmount] = useState(0);

    const handleClose = () => setIsDireactPay(false);
    const handleShow = () => setIsDireactPay(true);
    const handleChange = e => setCoinUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    
    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);

    const amount = params.get('amount');
    const p_id = params.get('id');
    const b_id = params.get('bid');
    const type = params.get('type');

    if(!amount || !p_id) {
        history.goBack();
    }

    const stripePromise = loadStripe(STRIPE_KEY);
    let stripe;
    (async() => {
        stripe = await stripePromise;
    })();

    const copyInvoice = () => {
        try{
            navigator.clipboard.writeText(paymentRequest);
            setCopyText('ri-check-line');
            setTimeout(() => setCopyText('ri-file-copy-line'), 2000);
        } catch (err) {
            alert('Copy failed');
        }
    }

    const generateInvoice = async () => {
        setRHash('');
        setPaymentRequest('');
        const rate = await fetch(baseurl+"/users/lightning/getExchangeRates");
        const currentRate = await rate.json();
        setRate(currentRate.rate);
        setSatsAmount(Math.ceil(amount / currentRate.rate * 100000000));

        const res = await fetch(baseurl+"/users/lightning/createInvoice", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                amount: Math.ceil(amount / currentRate.rate * 100000000),
                p_id,
                b_id,
                type
            })
        });
        const result = await res.json();
        
        if(!result.error) {
            setRHash(result.hash)
            setPaymentRequest(result.text)
        }        
    }

    const checkPaid = async () => {
        const res = await fetch(baseurl+"/users/lightning/checkPaid", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({hash: encodeURIComponent(rHash)})
        });
        const result = await res.json();
        if(result.paid) {
            history.push('/'+type);
        }
    }

    const stripeCheckout = async () => {
        setIsProcessing(true);
        const res = await fetch(baseurl+"/users/stripe/getSession", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({amount, p_id, type, b_id})
        });
        const result = await res.json();
        stripe.redirectToCheckout({sessionId: result.session_id});
        setIsProcessing(false);
    }

    const handleCoinLogin = async () => {
        if (coinUser.name && coinUser.name !="" && coinUser.password != "" && coinUser.password) {
            setIsCoinLogin(true);
            setIsCoinLoginFailed(false);
            const res = await fetch(baseurl+"/users/lightning/login", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(coinUser)
            });
            const result = await res.json();
            if(result.success) {
                setCointoken(result.data.token);
                setIsCoinLogin(false);
                setIsCoinLoggedin(true);
            } else {
                setIsCoinLogin(false);
                setIsCoinLoginFailed(true);
            }
        } else {
            setIsCoinLoginFailed(true);
        }
    };

    const handleCoinConfirm = async () => {
        setIsCoinConfirm(true);
        setIsCoinConfirmed(0);
        const res = await fetch(baseurl+"/users/lightning/pay", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                cointoken,
                satsAmount,
                p_id,
                b_id,
                type
            })
        });
        const result = await res.json();
        if(result.success) {
            setIsCoinConfirm(false);
            setIsCoinConfirmed(1);
            setTimeout(function(){
                result.type == 'archive'? history.push('/archive'):history.push('/live');
            }, 2000);
        } else {
            setIsCoinConfirm(false);
            setIsCoinConfirmed(2);
        }
    }

    const depositSats = async () => {
        setTimeout(() => {
            setIsDireactPay(false);
            setIsCoinLogin(false);
            setIsCoinLoginFailed(false);
            setIsCoinLoggedin(false)
            setIsCoinConfirm(false)
            setIsCoinConfirmed(0);
        }, 1000);
    }

    useEffect(() => {
        setIsProcessing(false);        
        generateInvoice();
    }, []);

    useEffect(() => {
        let interval;
        if(paymentRequest) {
            interval = setInterval(checkPaid, 3000);
        }
        return () => clearInterval(interval);
    }, [paymentRequest]);

    return (
        <>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <div className="iq-pricing-card">
                                <div className="text-center iq-pricing pt-2">
                                    <h4>Select Payment Method</h4>
                                    <Row style={{marginTop: 50}}>
                                        <Col md="6" sm="12" style={{marginBottom: 50}}>
                                            <h4 className='text-primary'>Price: {"$"+amount}<small>{" ("+(new Intl.NumberFormat().format(amount / rate * 100000000)) + " sats)"}</small></h4>
                                            {isProcessing ? <div className='spinner-container'><Spinner className="stripe-spinner" color1="#0099ff" color2="#206eff" text="" /></div>:
                                            <button style={{marginTop: 20}} className='btn btn-primary text-white' type='button' onClick={stripeCheckout}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="IconChange" height="25" width="25"><path d="M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z" id="mainIconPathAttribute" fill="#ffffff"></path></svg> &nbsp;&nbsp;Pay by Stripe</button>}

                                            <hr style={{marginTop: 40}}></hr>
                                            <br></br>
                                            <h6>Or you can just scan or copy invoice to pay by Lightning bitcoin.</h6>
                                            {paymentRequest && <>
                                                <div className="invoice"><span style={{wordBreak: "break-word", fontSize: 16}}>{paymentRequest.slice(0, 10) + " ... " + paymentRequest.slice(-15)}&nbsp;&nbsp;<i className={`${copyText} cursor-pointer`} onClick={copyInvoice}></i>
                                                </span> 
                                                </div>
                                                <br></br>
                                                <Row>
                                                    <Col md="4" sm="12" style={{marginTop: 30}}><a className='btn btn-primary text-white' href={"lightning:" + paymentRequest}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg> Pay in Wallet</a></Col>
                                                    <Col md="4" sm="12" style={{marginTop: 30}}><button className='btn btn-primary text-white' type='button' onClick={handleShow}> Internal Pay</button></Col>
                                                    <Col md="4" sm="12" style={{marginTop: 30}}><button className='btn btn-primary text-white' type='button' onClick={generateInvoice}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="IconChangeColor" height="16" width="16"><path d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160zM64 88C64 92.38 67.63 96 72 96h80C156.4 96 160 92.38 160 88v-16C160 67.63 156.4 64 152 64h-80C67.63 64 64 67.63 64 72V88zM72 160h80C156.4 160 160 156.4 160 152v-16C160 131.6 156.4 128 152 128h-80C67.63 128 64 131.6 64 136v16C64 156.4 67.63 160 72 160zM197.5 316.8L191.1 315.2C168.3 308.2 168.8 304.1 169.6 300.5c1.375-7.812 16.59-9.719 30.27-7.625c5.594 .8438 11.73 2.812 17.59 4.844c10.39 3.594 21.83-1.938 25.45-12.34c3.625-10.44-1.891-21.84-12.33-25.47c-7.219-2.484-13.11-4.078-18.56-5.273V248c0-11.03-8.953-20-20-20s-20 8.969-20 20v5.992C149.6 258.8 133.8 272.8 130.2 293.7c-7.406 42.84 33.19 54.75 50.52 59.84l5.812 1.688c29.28 8.375 28.8 11.19 27.92 16.28c-1.375 7.812-16.59 9.75-30.31 7.625c-6.938-1.031-15.81-4.219-23.66-7.031l-4.469-1.625c-10.41-3.594-21.83 1.812-25.52 12.22c-3.672 10.41 1.781 21.84 12.2 25.53l4.266 1.5c7.758 2.789 16.38 5.59 25.06 7.512V424c0 11.03 8.953 20 20 20s20-8.969 20-20v-6.254c22.36-4.793 38.21-18.53 41.83-39.43C261.3 335 219.8 323.1 197.5 316.8z" id="mainIconPathAttribute" fill="#ffffff"></path></svg> New Invoice</button></Col>
                                                </Row>
                                                </>
                                            }
                                        </Col>
                                        <Col md="6" sm="12">
                                            <a href={"lightning:" + paymentRequest} >
                                                {paymentRequest? <img src={"https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl="+ paymentRequest} alt='qrImage' />:<div className='spinner-container'>
                                                <Spinner className="payment-spinner" color1="#0099ff" color2="#206eff" text="Loading..." />
                                                </div>}
                                            </a>
                                            <label style={{marginTop: 40}}>This QR-Code is a Lightning invoice. Pay with a Wallet like <a href="https://phoenix.acinq.co/" target={"_blank"} rel="noreferrer">Phoenix</a>, <a href="https://muun.com/" target={"_blank"} rel="noreferrer">Muun</a>, <a href="https://breez.technology/" target={"_blank"} rel="noreferrer">Breez</a>, <a href="https://bluewallet.io/" target={"_blank"} rel="noreferrer">BlueWallet</a> or with <a href="https://strike.me/" target={"_blank"} rel="noreferrer">Strike</a> and <a href="https://cash.app/" target={"_blank"} rel="noreferrer">Cash App</a> You can also pay with a browser extension like <a href="https://getalby.com/" target={"_blank"} rel="noreferrer">Alby</a>.</label>
                                        </Col>
                                    </Row>
                                </div>
                                <Modal scrollable={true} show={isDireactPay} onHide={handleClose}>
                                    <Modal.Body style={{ textAlign: 'center' }}>
                                        <img className="img logo" src={coin_logo} alt="Coinos.io" width={120}/>
                                        <hr />
                                        <img className="img" src={lightning_qr} alt="Lightning QR Code" width={150} />
                                        <div>
                                            {!isCoinLoggedin? 
                                                <>
                                                    <Row>
                                                        <Col md="12">{isCoinLoginFailed? 'Sorry. Please check your username and password and try again.': '\u00A0'}</Col>
                                                        <Col md={{span:10, offset:1}} style={{marginTop: 10}}>
                                                            <input type="text" name="name" size="30" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" value={coinUser.name || ''} onChange={handleChange} placeholder="Name"/>
                                                        </Col>
                                                        <Col md={{span:10, offset:1}} style={{marginTop: 10}}>
                                                            <input type="password" name="password" size="30" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" value={coinUser.password || ''} onChange={handleChange} placeholder="Password"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={{span:10, offset:1}} style={{marginTop: 15}}>
                                                            <Button className='spinner-container' variant="success" onClick={handleCoinLogin} disabled={isCoinLogin} style={{marginTop: 15}} block>{isCoinLogin? <TrinitySpinner className="coin-spinner" color="#ffffff" text=""/>: 'Login'} </Button>
                                                        </Col>
                                                    </Row>
                                                </>:
                                                <>
                                                    <Row>
                                                        <Col md="12">
                                                            <img className="img" src={lightning_sat} alt="Lightning Sat" width={40} style={{marginTop: 25, marginBottom: 10}}/><h3 style={{marginBottom: 12, color: '#E57C23', paddingLeft: 20}}>{new Intl.NumberFormat().format(amount / rate * 100000000)} <small style={{color: 'white'}}>  sats</small></h3>
                                                            <Col md="12">{isCoinConfirmed == 2? 'Not enough sats!': '\u00A0'}</Col>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={{span:10, offset:1}}>
                                                            {isCoinConfirmed != 2 ?
                                                                <Button className='spinner-container' variant="success" onClick={handleCoinConfirm} disabled={isCoinConfirm} style={{marginTop: 10}} block>{isCoinConfirm? <TrinitySpinner className="coin-spinner" color="#ffffff" text=""/>: 'Confirm'}</Button>
                                                                :<Button className='spinner-container' variant="warning" href='https://coinos.io/' onClick={depositSats} target='_blank' style={{marginTop: 10}} block>Deposit Sats</Button>
                                                            }
                                                        </Col>
                                                    </Row>
                                                </>
                                            }
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}


export default Purchase;
  