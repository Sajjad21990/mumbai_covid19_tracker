import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import styles from "./TablePage.module.css";

const TablePage = (props) => {
  const data_panel = {
    columns: [
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header spring-warmth-gradient d-flex justify-content-center align-items-center py-2 mx-3 mb-3">
            <span className={styles.columnHeading}>Area-Name</span>
          </MDBCardHeader>
        ),
        field: "last",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header young-passion-gradient d-flex justify-content-center align-items-center py-2 mx-3 mb-3">
            <span className={styles.columnHeading}>Total-Case</span>
          </MDBCardHeader>
        ),
        field: "username",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade  gradient-card-header blue-gradient d-flex justify-content-center align-items-center py-2 mx-3 mb-3">
            <span className={styles.columnHeading}>Active-Case</span>
          </MDBCardHeader>
        ),
        field: "username2",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header dusty-grass-gradient d-flex justify-content-center align-items-center py-2 mx-3 mb-3">
            <span className={styles.columnHeading}>Recovered</span>
          </MDBCardHeader>
        ),
        field: "username3",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header heavy-rain-gradient d-flex justify-content-center align-items-center py-2 mx-3 mb-3">
            <span className={styles.columnHeading}>Deaths</span>
          </MDBCardHeader>
        ),
        field: "username4",
        sort: "asc",
      },
    ],
    rows: [
      {
        last: "Otto",
        username: "@mdo",
        username2: "Mark",
        username3: "Otto",
        username4: "@mdo",
      },
      {
        last: "Thornton",
        username: "@fat",
        username2: "Jacob",
        username3: "Thornton",
        username4: "@fat",
      },
      {
        last: "the Bird",
        username: "@twitter",
        username2: "Larry",
        username3: "the Bird",
        username4: "@twitter",
      },
      {
        last: "Topolski",
        username: "@P_Topolski",
        username2: "Paul",
        username3: "Topolski",
        username4: "@P_Topolski",
      },
      {
        last: "the Bird",
        username: "@twitter",
        username2: "Larry",
        username3: "the Bird",
        username4: "@twitter",
      },
    ],
  };

  return (
    <MDBCard className="ml-3 mr-3">
      <MDBCardHeader className="view view-cascade gradient-card-header purple-gradient d-flex justify-content-center align-items-center py-2 mx-4 mb-3">
        {/* <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div> */}

        <span className={styles.tableHeading}>Mumbai Area-Wise Data</span>

        {/* <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div> */}
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed striped searching={true} bordered>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default TablePage;
