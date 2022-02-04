import React, { Component } from "react";
import Aux from "../../hoc/Auxx";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.SideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}> {this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
