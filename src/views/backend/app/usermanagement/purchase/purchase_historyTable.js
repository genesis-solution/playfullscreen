import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

const PurchaseHistoryTable = ({ purchases }) => {

  useEffect(() => {
    $('#tblPurchase').DataTable();
  }, []);

  const convertDateTimeFormat = (datetime) => {
    const dt = new Date(datetime);
    return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(dt);
  }

  return (
    <>
      <div className="div-table">
        <h4> Purchase History</h4>
        <br/>
        <table id="tblPurchase" className="table text-center" style={{width:"100%", marginTop: "10px"}}>
          <thead>
              <tr>
              <th style={{width: "3%"}}>No</th>
              <th style={{width: "25%"}}>Package</th>
              <th style={{width: "20%"}}>BroadCaster</th>
              <th style={{width: "15%"}}>Expiration Date</th>
              <th style={{width: "10%"}}>Price</th>
              </tr>
          </thead>
          <tbody>
          {purchases && purchases.map((purchase, index) => {
              return (
                  <tr key={index}>
                  <th scope="row">{ index+1 }</th>
                  <td>{ purchase.pname }</td>
                  <td>{ purchase.bname }</td>
                  <td>{ convertDateTimeFormat(purchase.expiry_date) }</td>
                  <td>{purchase.lightning? <FontAwesomeIcon icon={faBolt} style={{color: "yellow"}}/>: <FontAwesomeIcon icon={faDollarSign} style={{color: "lightgreen"}}/>}{ "  " + purchase.price }</td>
                  </tr>
              )
              })
          }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PurchaseHistoryTable;
