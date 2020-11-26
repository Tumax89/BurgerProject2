import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const modal = (props) => (
  <div>
    <Shadow show={props.show} darahad={props.closeConfirmModal} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translate(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={css.Modal}
    >
      {props.children}
    </div>
  </div>
);

export default modal;

/* Хэрвээ modal дотор зөндөө олон юм байгаа тохиолдолд яаж гарах вээ гэхээр         <Modal>
          <h1>Та итгэлтэй байна уу...</h1>
          <p>Захиалгын дэлгэрэнгүй</p>
        </Modal>  ингэж бичиж болно. 
        
        энэ бүгдийг Modal component яаж хүлээж авах вэ гэхээр Modal component-ийн хаалтан дотор байгаа бүх зүйлс Modal component-ийн props -оор дамждаг. {props.children} гэдэг тусгай property-гээр дамждаг.*/
// JSX зөвхөн нэг л юм буцаадаг бөгөөд хэрвээ олон зүйл буцаахаар бол нэг div дотор хийж өгнө.
