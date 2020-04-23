import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/Cards/Cards";

import TablePage from "../components/Table/TablePage";

import "../constants/Global.css";

const Main = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h1 id="header">Mumbai Shia Covid19 Tracker</h1>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <TablePage />
      </div>
      <div>
        <div className="row mt-5 ml-2 p-1">
          <div className="col-lg-12">
            <p>
              <strong>Disclaimer: </strong>
              The data is published for use within a closed group, no claim in
              terms of accuracy and rights can be made on the hosting team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
