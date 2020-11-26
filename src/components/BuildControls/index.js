import React from "react";
import * as actions from "../../redux/actions/burgerActions";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import { connect } from "react-redux";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.burgeriinOrts };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  // control-оос давталт хийгээд buildCongtrol-ийг controls-оос гаргаж ирнэ. ингэхийн тулд controls дотор байгаа зүгээр JS object-уудыг массив байдлаар давтахын тулд property-нуудыг нь массив болгож гаргаж авах шаардлагатай. {Object.keys(controls)}
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ: <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          type={el}
          orts={props.ingredientNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    price: state.totalPrice,
    purchasing: state.purchasing,
    ingredientNames: state.ingredientNames,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    ortsNemeh: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(BuildControls);
