import React from "react";
import classes from "./Model.module.css";
import Aux from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";

const Model = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.Modelclosed} />

    <div
      className={classes.Modal}
      style={{
        tramsform: props.show ? "translateY(0)" : "tramslateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Model;
