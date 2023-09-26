import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import { userActions } from "../../../../../store/user";
import PurchaseHistoryTable from "./purchase_historyTable";

const PurchaseHistory = ({ purchases, getPurchases }) => {

  useEffect(() => {
    if (!purchases) {
      getPurchases();
    }
  }, []);

  return (
    <>
      <main id="main" className="site-main">
        <Container fluid>
            <Row>
              <Col sm={12} >
                <div className="table-responsive">
                  {purchases && <PurchaseHistoryTable purchases={purchases} />}
                </div>
              </Col>
            </Row>
        </Container>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  purchases: state.user.purchases,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPurchases: () => {
      dispatch(userActions.getPurchases());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(PurchaseHistory);
