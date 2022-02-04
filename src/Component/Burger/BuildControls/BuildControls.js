import React from "react";
import classes from "./BuilsControles.module.css";
import SBuildControl from "./SBuildControl/SBuildControl";
const controls = [
  { lable: "Salad", type: "salad" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Total Price: <strong>{props.Price.toFixed(2)}</strong>
    </p>

    {controls.map((ctrl) => (
      <SBuildControl
        key={ctrl.lable}
        lable={ctrl.lable}
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientRemoved(ctrl.type)}
        disable={props.disable[ctrl.type]}
      />
    ))}

    <button
      disabled={!props.purchaseable}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
