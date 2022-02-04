import React from "react";

import classes from "./SBuildControl.module.css";

const SBuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.lable}</div>
    <button
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disable}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      High
    </button>
  </div>
);
export default SBuildControl;
