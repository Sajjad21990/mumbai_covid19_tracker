import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import CardConstant from "../../constants/CardConstant";

const Cards = () => {
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
            totalCount={15}
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
            totalCount={6}
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
            totalCount={7}
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
            totalCount={2}
            categoryUnderline="deathsUnderline"
            borderColor="dark"
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
