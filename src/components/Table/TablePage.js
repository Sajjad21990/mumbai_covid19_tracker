import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBDataTable } from "mdbreact";
import styles from "./TablePage.module.css";
import rowData from "../../constants/rowsData";

const TablePage = (props) => {
  const data = {
    columns: [
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header night-fade-gradient d-flex justify-content-center align-items-center ">
            <span className={styles.columnHeading}>Area-Name</span>
          </MDBCardHeader>
        ),
        field: "area_name",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header young-passion-gradient d-flex justify-content-center align-items-center">
            <span className={styles.columnHeading}>Total-Cases</span>
          </MDBCardHeader>
        ),
        field: "total_cases",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade  gradient-card-header blue-gradient d-flex justify-content-center align-items-center">
            <span className={styles.columnHeading}>Active-Cases</span>
          </MDBCardHeader>
        ),
        field: "total_active",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header dusty-grass-gradient d-flex justify-content-center align-items-center">
            <span className={styles.columnHeading}>Total-Recovered</span>
          </MDBCardHeader>
        ),
        field: "total_recovered",
        sort: "asc",
      },
      {
        label: (
          <MDBCardHeader className="view view-cascade gradient-card-header winter-neva-gradient d-flex justify-content-center align-items-center">
            <span className={styles.columnHeading}>Total-Deaths</span>
          </MDBCardHeader>
        ),
        field: "total_deaths",
        sort: "asc",
      },
    ],
    // rows: [
    //   {
    //     area_name: <span className="font-weight-bold">Mira-Bhaynder</span>,
    //     total_cases: "9",
    //     total_active: "4",
    //     total_recovered: "4",
    //     total_deaths: "1",
    //   },
    // ],
    rows: rowData,
  };

  return (
    <MDBCard className="ml-3 mr-3">
      <MDBCardHeader className="view view-cascade gradient-card-header purple-gradient d-flex justify-content-center  py-2 mx-4 mb-3">
        <span className={styles.tableHeading}>Maharashtra Area-Wise Data</span>
      </MDBCardHeader>
      <MDBCardBody cascade>
        {/* <MDBTable btn fixed striped searching={true} bordered>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable> */}
        <MDBDataTable
          striped
          bordered
          hover
          data={data}
          responsiveMd
          responsiveSm
          barReverse
          noBottomColumns
          entries={20}
        />
      </MDBCardBody>
      {/* {console.log(rowData[0].total_cases)} */}

      <small className="ml-3 mb-2">
        <strong>
          <span style={{ color: "red" }}>*</span> : Confirmation Pending
        </strong>
        <br />
        <strong>Disclaimer: </strong>
        The data is published for use within a closed group, no claim in terms
        of accuracy and rights can be made on the hosting team.
      </small>
    </MDBCard>
  );
};

export default TablePage;
