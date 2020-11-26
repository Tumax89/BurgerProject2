import React from "react";
import css from "./style.module.css";

const BuildControl = props => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.orts}</div>
    <button disabled={props.disabled[props.type]} onClick={() => props.ortsHasah(props.type)} className={css.Less}>Хасах</button>
    <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
// <button onClick={() => props.ortsNemeh(props.type)} props-оор ОрцНэмэх орж ирлээ.

/* onClick={props.ortsNemeh(props.type)} гэж бичиж болох боловч энэ тохиолдол дээр  <div className={css.BuildControl}>
    <div className={css.Label}>{props.orts}</div>
    <button className={css.Less}>Хасах</button>
    <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
      Нэмэх
    </button>
  </div>  - энэ JSX- ийг дэлгэцэн дээр гаргаж ирэх үедээ onClick={props.ortsNemeh(props.type)} -ийг шууд дуудчихдаг, уг нь энэ функц нь click хийх үе дээр ажиллах ёстой функц юм. Яг тухайн үед дуудах шаардлагагүй тохиолдолд функц нь дотор хийгээд дамжуулах хэрэгтэй, өөрөөр хэлбэл газар дээр нь нэргүй функц (anonymoys ) дотор хийж өгнө. */