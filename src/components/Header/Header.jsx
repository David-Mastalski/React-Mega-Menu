import React from "react";
import styles from "./Header.module.css";
import HeaderNav from "../HeaderNav/HeaderNav";
import Menu from "../Menu/Menu";
import { MenuProvider } from "../../context/MenuProvider";

function Header() {

  return (
    <MenuProvider>
      <header>
        <div className={styles.header}>
          <HeaderNav />
          <Menu />
        </div>
      </header>
    </MenuProvider>
  );
}

export default Header;
