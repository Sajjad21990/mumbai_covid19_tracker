import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import CardConstant from "../../constants/CardConstant";

const Cards = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="confirmedheading"
            categoryTitle="CONFIRMED"
            categoryTodaysCount="confirmedTodaysCount"
            todaysCount={122}
            categoryTotalCount="confirmedTotalCount"
            totalCount={2122}
            categoryUnderline="confirmedUnderline"
          />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="activeheading"
            categoryTitle="ACTIVE"
            categoryTodaysCount="activeTodaysCount"
            todaysCount={0}
            categoryTotalCount="activeTotalCount"
            totalCount={21}
            categoryUnderline="activeUnderline"
          />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="recoveredheading"
            categoryTitle="RECOVERED"
            categoryTodaysCount="recoveredTodaysCount"
            todaysCount={0}
            categoryTotalCount="recoveredTotalCount"
            totalCount={332}
            categoryUnderline="recoveredUnderline"
          />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <CardConstant
            categoryHeading="deathsheading"
            categoryTitle="DECEASED"
            categoryTodaysCount="deathsTodaysCount"
            todaysCount={2}
            categoryTotalCount="deathsTotalCount"
            totalCount={43}
            categoryUnderline="deathsUnderline"
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
