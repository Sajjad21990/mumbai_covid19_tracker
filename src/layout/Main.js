import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/Cards/Cards";

import TablePage from "../components/Table/TablePage";

import "../constants/Global.css";

class Main extends React.Component {
  render() {
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
      </div>
    );
  }
}

export default Main;
