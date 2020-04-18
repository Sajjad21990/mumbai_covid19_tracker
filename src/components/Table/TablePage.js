import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import styles from "./TablePage.module.css";

const TablePage = (props) => {
  const data_panel = {
    columns: [
      {
        label: "Last Name",
        field: "last",
        sort: "asc",
      },
      {
        label: "Username",
        field: "username",
        sort: "asc",
      },
      {
        label: "Username",
        field: "username2",
        sort: "asc",
      },
      {
        label: "Username",
        field: "username3",
        sort: "asc",
      },
      {
        label: "Username",
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
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        {/* <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div> */}
        <div></div>
        <span className={styles.tableHeading}>Mumbai Area-Wise Data</span>
        <div></div>
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
