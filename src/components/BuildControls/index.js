import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  // control-оос давталт хийгээд buildCongtrol-ийг controls-оос гаргаж ирнэ. ингэхийн тулд controls дотор байгаа зүгээр JS object-уудыг массив байдлаар давтахын тулд property-нуудыг нь массив болгож гаргаж авах шаардлагатай. {Object.keys(controls)}
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ: <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          disabled={props.disabledIngredients}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;

// <BuildControl ortsNemeh={props.ortsNemeh} type="salad" orts="Салад" /> гэдэг нь BurgerBuilder-аас ortsNemeh гэдгийг props-оор нь дамжуулан авч байна гэсэн үг.

/* <BuildControl
      disabled={props.disabledIngredients}
      ortsHasah={props.ortsHasah}
      ortsNemeh={props.ortsNemeh}
      type="salad"
      orts="Салад"
    />
