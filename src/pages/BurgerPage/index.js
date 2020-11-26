import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };

  componentDidMount = () => {};

  continueOrder = () => {
    const params = [];

    for (let orts in this.props.burgeriinOrts) {
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }

    params.push("dun=" + this.props.niitUne);

    this.props.history.push({
      pathname: "/ship",
      search: params.join("&"),
    });

    this.closeConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    console.log(this.props);
    const disabledIngredients = { ...this.props.burgeriinOrts };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    console.log("hey", this.props);

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.props.niitUne}
              ingredientsNames={this.props.ingredientNames}
              ingredients={this.props.burgeriinOrts}
            />
          )}
        </Modal>
        <Burger orts={this.props.burgeriinOrts} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={this.props.ingredientNames}
          disabled={!this.props.purchasing}
          price={this.props.niitUne}
          disabledIngredients={disabledIngredients}
          ortsHasah={this.props.burgereesOrtsHas}
          ortsNemeh={this.props.burgertOrtsNem}
        />{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice,
    purchasing: state.purchasing,
    ingredientNames: state.ingredientNames,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    burgertOrtsNem: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    burgereesOrtsHas: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(BurgerPage);
