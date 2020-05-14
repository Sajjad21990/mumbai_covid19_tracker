import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "../components/Cards/Cards";

import TablePage from "../components/Table/TablePage";

import "../constants/Global.css";
import LightboxPage from "../components/Gallery/LightBoxPage";

const Main = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h1 id="header">Shia Covid19 Tracker</h1>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <TablePage />
      </div>
      <div>
        <div>
          <LightboxPage />
        </div>
      </div>
    </div>
  );
};

export default Main;
