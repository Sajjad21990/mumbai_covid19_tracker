import React from "react";
import { Typography } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./CardConstant.module.css";
import "./Global.css";

const CardConstant = (props) => {
  const {
    categoryHeading,
    categoryTitle,
    categoryTodaysCount,
    todaysCount,
    categoryTotalCount,
    totalCount,
    categoryUnderline,
  } = props;

  return (
    <div className="cardContainer shadow p-3 mb-5 bg-white rounded">
      <Typography
        className={styles.heading}
        component={"span"}
        id={categoryHeading}
      >
        {categoryTitle}
      </Typography>
      <Typography className={styles.todaysCount} id={categoryTodaysCount}>
        [+
        <CountUp start={0} end={todaysCount} duration={2} separator="," />]
      </Typography>
      <Typography className={styles.totalCount} id={categoryTotalCount}>
        <span
          style={{ fontSize: "22px", fontWeight: "bold" }}
          id={categoryUnderline}
        >
          <CountUp start={0} end={totalCount} duration={2} separator="," />
        </span>
      </Typography>
    </div>
  );
};

export default CardConstant;
