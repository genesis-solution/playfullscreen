import React,{useEffect, useState} from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { videoActions } from "../../../store/video";

const Pricing = ({
    packages,
    getPackageInfo,
    clearPackageInfo,
  }) => { 
    const [spackage, setSpackage]=useState('package');
    const [packageRequest, setPackageRequest]=useState(false);

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const id = params.get('hlsurl');
    const type = params.get('type');

    useEffect(() => {
        if (type == 'archive') {
            getPackageInfo({ id, type:'archive' });            
        } else {
            getPackageInfo({ id, type:'live' });
        }
        return () => {
            clearPackageInfo();
        };
    }, []);

    useEffect(() => {
        if (packages) {
            console.log(packages, packageRequest);
            setPackageRequest(true);
        }
      }, [packages]);

    const dateFormat = (date) => {
        const dt = new Date(date);
        return dt.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            // hour: '2-digit',
            // minute: '2-digit',
            // second: '2-digit'
        });
    }

    return (
        <>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <div className="iq-pricing-card">
                                <div className="table-responsive iq-pricing pt-2">
                                    {packageRequest && (
                                        <Table id="my-table" className="table" data-active="premium">
                                        <thead>
                                            <tr>
                                                <th className="text-center iq-price-head" style={{ width: `${100/(packages.length+1)}%` }}></th>
                                                {packages.map((pk) => (
                                                    <th className="text-center iq-price-head free" key={pk.id} style={{ width: `${100/(packages.length+1)}%` }}>
                                                        <div className={`iq-price-box ${spackage === pk.name ? 'active' : ''} `} onClick={() =>setSpackage(pk.name)}>
                                                            <h3 className="iq-price-rate text-white">${pk.price}<small></small></h3>
                                                            <span className="type">{pk.uses_left}</span>
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="text-center" scope="row">Name</th>
                                                {packages.map((pk) => (               
                                                    <td className={`text-center iq-child-cell ${spackage === pk.name ? 'active' : ''}`} key={pk.name}>
                                                        {pk.name}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <th className="text-center" scope="row">Description</th>
                                                {packages.map((pk) => (               
                                                    <td className={`text-center iq-child-cell ${spackage === pk.name ? 'active' : ''}`} key={pk.description}>
                                                        {pk.description}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <th className="text-center" scope="row">Start Date</th>
                                                {packages.map((pk) => (               
                                                    <td className={`text-center iq-child-cell ${spackage === pk.name ? 'active' : ''}`} key={pk.start_date}>
                                                        {dateFormat(pk.start_date)}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <th className="text-center" scope="row">Expire Date</th>
                                                {packages.map((pk) => (               
                                                    <td className={`text-center iq-child-cell ${spackage === pk.name ? 'active' : ''}`} key={pk.expiry_date}>
                                                        {dateFormat(pk.expiry_date)}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <th className="text-center iq-price-footer"></th>
                                                {packages.map((pk) => (               
                                                    <td className="text-center iq-price-footer" key={pk.id+10}>
                                                        <div className="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                                            <Link to={`/purchase?id=${pk.id}&amount=${pk.price}&type=${type}&bid=${id}`} className="btn btn-hover iq-button">Purchase</Link>
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </Table>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>   
                </Container>
            </main>
        </>
    )
}

const mapStateToProps = (state) => ({
    packages: state.videos.packages,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getPackageInfo: (path) => {
        dispatch(videoActions.getPackageInfo(path));
      },
      clearPackageInfo: () => {
        dispatch(videoActions.clearPackageInfo());
      },
    };
  };
  export default compose(connect(mapStateToProps, mapDispatchToProps))(
    Pricing
  );