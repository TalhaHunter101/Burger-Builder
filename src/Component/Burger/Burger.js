import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./Burgeringredient/BurgerIngredient";

const Burger = (props) => {
  let transforIngredient = Object.keys(props.ingredient)
    .map((Igkey) => {
      return [...Array(props.ingredient[Igkey])].map((_, i) => (
        <BurgerIngredient key={Igkey + i} type={Igkey}></BurgerIngredient>
      ));
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);
  if (transforIngredient.length <= 0) {
    transforIngredient = <p>Please Start Adding Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transforIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
