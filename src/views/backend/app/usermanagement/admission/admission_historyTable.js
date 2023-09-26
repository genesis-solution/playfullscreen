import React, { useEffect } from "react";
import $ from 'jquery';

const AdmissionHistoryTable = ({ admissions }) => {

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
        <h4> Admission History</h4>
        <br/>
        <table id="tblPurchase" className="table text-center" style={{width:"100%", marginTop: "10px"}}>
          <thead>
              <tr>
              <th style={{width: "5%"}}>No</th>
              <th style={{width: "25%"}}>Video Name</th>
              <th style={{width: "20%"}}>BroadCaster</th>
              <th style={{width: "15%"}}>Type</th>
              <th style={{width: "10%"}}>Remain Uses</th>
              <th style={{width: "20%"}}>Watch Time</th>
              </tr>
          </thead>
          <tbody>
          {admissions && admissions.map((admission, index) => {
              return (
                  <tr key={index}>
                  <th scope="row">{ index+1 }</th>
                  <td>{ admission.video_name }</td>
                  <td>{ admission.bname }</td>
                  <td>{ admission.archive? 'Archive': 'Live' }</td>
                  <td>{ admission.remain_uses }</td>
                  <td>{ convertDateTimeFormat(admission.created_at) }</td>
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

export default AdmissionHistoryTable;
