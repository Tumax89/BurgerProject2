import React from "react";
import css from "./style.module.css";

const Button = (props) => (
  <button
    onClick={props.daragdsan}
    className={`${css.Button} ${css[props.btnType]}`}
  >
    {props.text}{" "}
  </button>
);

export default Button;
//  товчлуурын төрлийг дамжуулахдаа шууд ингэж дамжуулж болохгүй {$rops.btnType}, css дотор байгаа danger болон succes-ийг авна гэж бичих ёстой. Тэгэхийн тулд ${css[props.btnType]} гэж бичнэ. Object-ийн доторх аттрибют рүү динамикаар хандаж байгаа тохиолдолд массивын хаалт хэрэглэж хандаж болно.
