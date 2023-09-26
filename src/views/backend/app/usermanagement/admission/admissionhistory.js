import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import { userActions } from "../../../../../store/user";
import AdmissionHistoryTable from "./admission_historyTable";

const AdmissionHistory = ({ admissions, getAdmissions }) => {

  useEffect(() => {
    if (!admissions) {
      getAdmissions();
    }
  }, []);

  return (
    <>
      <main id="main" className="site-main">
        <Container fluid>
            <Row>
                <Col sm="12" style={{ marginTop: '60px' }}>
                  <div className="table-responsive">
                    {admissions && <AdmissionHistoryTable admissions={admissions} />}
                  </div>
                </Col>
            </Row>
        </Container>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  admissions: state.user.admissions,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAdmissions: () => {
      dispatch(userActions.getAdmissions());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(AdmissionHistory);
