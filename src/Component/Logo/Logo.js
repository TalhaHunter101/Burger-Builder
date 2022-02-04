import React from "react";
import Aux from "../../hoc/Auxx";
import burgerLogo from "../../Assets/images/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = (props) => (
  <Aux>
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger"></img>
    </div>
  </Aux>
);

export default Logo;
