const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 1000,
};

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ortsNer],
    };
  }
  return state;
};

export default reducer;

/*  Жнь: Бяслаг нэм гэхэд вэб хуудсан дээр бяслаг нэмж харагдуулахын тулд action.nemehOrts-ийг массивын хаалтан дотор бичиж өгнө, ингэснээр onClick дарагдах үед type-аараа ангилагдан орж ирнэ /хичээл №71/.  */
