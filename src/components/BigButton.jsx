import React from "react";
import styles from "./BigButton.module.css";

function BigButton(props) {
  const { img, title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1>{title}</h1>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default BigButton;
