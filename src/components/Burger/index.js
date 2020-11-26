import React from "react";
import { connect } from "react-redux";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  // {bacon: 2, cheese: 2, meat: 1, salad: 1} -ийг нэг нэгээр нь массив болгож хувиргахын тулд "Object.entries" функцыг ашиглана. Тухайн функц руу object-ийг дамжуулхад, тухайн object-ийн аттрибютуудыг нэг массив болгоод гаргаж ирнэ.

  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });
  /*items.map -ийн el болгоноор нь давталт хийгээд тэр болгоноор нь BurgerIngredient гэдэг компонентүүдийг үүсгээд массивт хийнэ, тэгээд тэр массиваа  return (
    <div className={css.Burger}>
    <BurgerIngredient type="bread-top" />-ийн
    {content}-д гаргаж ирнэ.
*/
  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orts: state.ingredients,
  };
};
export default connect(mapStateToProps)(withRouter(Burger));
