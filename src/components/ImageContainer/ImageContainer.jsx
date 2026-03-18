import React, { useContext } from "react";
import styles from "./ImageContainer.module.css";
import { MenuContext } from "../../context/MenuContext";

function ImageContainer() {
  const { menuImgURL } = useContext(MenuContext);

  return (
    <div>
      <img className={styles.subMenuImg} src={menuImgURL} alt="SubMenu" loading="lazy" />
    </div>
  );
}

export default ImageContainer;
