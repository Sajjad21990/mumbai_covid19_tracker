import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import CardConstant from "../../constants/CardConstant";

import rowsData from "../../constants/rowsData";

const Cards = () => {
  const cc = rowsData.map((data) => data.total_cases);
  const ac = rowsData.map((data) => data.total_active);
  const rc = rowsData.map((data) => data.total_recovered);
  const dc = rowsData.map((data) => data.total_deaths);

  const confirmed_count = cc.reduce((a, b) => a + b, 0);
  const active_count = ac.reduce((a, b) => a + b, 0);
  const recovered_count = rc.reduce((a, b) => a + b, 0);
  const death_count = dc.reduce((a, b) => a + b, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 ">
          <CardConstant
            categoryHeading="confirmedheading"
            categoryTitle="CONFIRMED"
            categoryTodaysCount="confirmedTodaysCount"
            // todaysCount={15}
            categoryTotalCount="confirmedTotalCount"
            //old count 16
            totalCount={confirmed_count}
            categoryUnderline="confirmedUnderline"
            borderColor="danger"
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <CardConstant
            categoryHeading="activeheading"
            categoryTitle="ACTIVE"
            categoryTodaysCount="activeTodaysCount"
            // todaysCount={0}
            categoryTotalCount="activeTotalCount"
            //old count 6
            totalCount={active_count}
            categoryUnderline="activeUnderline"
            borderColor="primary"
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <CardConstant
            categoryHeading="recoveredheading"
            categoryTitle="RECOVERED"
            categoryTodaysCount="recoveredTodaysCount"
            // todaysCount={0}
            categoryTotalCount="recoveredTotalCount"
            totalCount={recovered_count}
            categoryUnderline="recoveredUnderline"
            borderColor="success"
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <CardConstant
            categoryHeading="deathsheading"
            categoryTitle="DECEASED"
            categoryTodaysCount="deathsTodaysCount"
            // todaysCount={1}
            categoryTotalCount="deathsTotalCount"
            totalCount={death_count}
            categoryUnderline="deathsUnderline"
            borderColor="dark"
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
