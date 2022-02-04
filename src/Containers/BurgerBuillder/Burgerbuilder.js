import React, { Component } from "react";
import Burger from "../../Component/Burger/Burger";
import Aux from "../../hoc/Auxx";
import BuildControls from "../../Component/Burger/BuildControls/BuildControls";
import Model from "../../Component/UI/Model/Model";
import OrderSummary from "../../Component/Burger/OrderSummary/OrderSummary";
import axiosoder from "../../axios-orders";
const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.2,
  bacon: 0.7,
};

class Burgerbuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    TotalPrice: 4,
    purchaseable: false,
    peuchasing: false,
  };

  updatepurchasestate(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredient = (type) => {
    const oldcount = this.state.ingredient[type];
    const newCount = oldcount + 1;
    const UpdateIngredient = {
      ...this.state.ingredient,
    };
    UpdateIngredient[type] = newCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const old_price = this.state.TotalPrice;
    const new_price = old_price + priceAddition;
    this.setState({ TotalPrice: new_price, ingredient: UpdateIngredient });
    this.updatepurchasestate(UpdateIngredient);
  };

  removeIngredient = (type) => {
    const oldcount = this.state.ingredient[type];
    if (oldcount <= 0) {
      return;
    }
    const newCount = oldcount - 1;
    const UpdateIngredient = {
      ...this.state.ingredient,
    };
    UpdateIngredient[type] = newCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const old_price = this.state.TotalPrice;
    const new_price = old_price - priceDeduction;
    this.setState({ TotalPrice: new_price, ingredient: UpdateIngredient });
    this.updatepurchasestate(UpdateIngredient);
  };

  peuchasehandler = () => {
    this.setState({ peuchasing: true });
  };
  PurchaseCancellerHandler = () => {
    this.setState({ peuchasing: false });
  };
  PurchaseCountinueHandler = () => {
    // alert("COuntinue!!");
    const oder = {
      Ingredients: this.state.ingredient,
      Price: this.state.TotalPrice,
      Coustomer: {
        name: "maria bee",
        Address: {
          street: "testStreet1",
          City: "Lahore",
        },
        email: "test@test.com",
        dileveryMethod: "fast",
      },
    };
    axiosoder
      .post("/oders.json", oder)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Model
          show={this.state.peuchasing}
          Modelclosed={this.PurchaseCancellerHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredient}
            purchaseCancel={this.PurchaseCancellerHandler}
            purchaseCountinue={this.PurchaseCountinueHandler}
            price={this.state.TotalPrice}
          />
        </Model>

        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disable={disabledInfo}
          Price={this.state.TotalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.peuchasehandler}
        />
      </Aux>
    );
  }
}
export default Burgerbuilder;
