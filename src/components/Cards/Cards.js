import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import CardConstant from "../../constants/CardConstant";

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
          <CardConstant
            categoryHeading="confirmedheading"
            categoryTitle="CONFIRMED"
            categoryTodaysCount="confirmedTodaysCount"
            todaysCount={9}
            categoryTotalCount="confirmedTotalCount"
            totalCount={9}
            categoryUnderline="confirmedUnderline"
            borderColor="danger"
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="activeheading"
            categoryTitle="ACTIVE"
            categoryTodaysCount="activeTodaysCount"
            todaysCount={0}
            categoryTotalCount="activeTotalCount"
            totalCount={4}
            categoryUnderline="activeUnderline"
            borderColor="primary"
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="recoveredheading"
            categoryTitle="RECOVERED"
            categoryTodaysCount="recoveredTodaysCount"
            todaysCount={0}
            categoryTotalCount="recoveredTotalCount"
            totalCount={4}
            categoryUnderline="recoveredUnderline"
            borderColor="success"
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="deathsheading"
            categoryTitle="DECEASED"
            categoryTodaysCount="deathsTodaysCount"
            todaysCount={1}
            categoryTotalCount="deathsTotalCount"
            totalCount={1}
            categoryUnderline="deathsUnderline"
            borderColor="dark"
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
