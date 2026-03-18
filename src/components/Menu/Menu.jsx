import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Menu.module.css";
import SubMenu from "../SubMenu/SubMenu";
import data from "../../data/data";
import { MenuContext } from "../../context/MenuContext";

function Menu() {
  const {
    isMenuActive,
    setIsSubMenuActive,
    setNestedMenuData,
    setMenuData,
    setSubMenuActiveItem,
    setMenuImgURL
  } = useContext(MenuContext);

  const menuRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const openSubMenu = (category) => {
    setIsSubMenuActive(true);
    setActiveCategory(category.category);
    setMenuData(category);
    setMenuImgURL(category?.imgURL || null);

    const firstSub = category?.submenu?.[0];

    setSubMenuActiveItem(firstSub?.id);
    setNestedMenuData(firstSub?.nestedMenu);
  };

  const closeSubMenu = () => {
    setIsSubMenuActive(false);
    setActiveCategory(null);
  };

  const handleSetSubMenu = (category) => {
    const isSame = category.category === activeCategory;

    if (isSame) {
      closeSubMenu();
      return;
    }

    openSubMenu(category);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(event.target)) {
        closeSubMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      id="mega-menu"
      ref={menuRef}
      className={`container ${styles.megaMenu} ${isMenuActive ? styles.active : ""}`}
    >
      <div className={styles.mainMenu}>
        <h2 className={styles.menuHeading}>Menu</h2>
        <ul className={styles.mainMenuList} id="main_menu_links">
          {data.map((category) => (
            <li key={category.category}>
              <button
                className={`menuItem ${styles.mainMenuItem}`}
                onClick={() => handleSetSubMenu(category)}
                aria-expanded={activeCategory === category.category}
              >
                {category.name}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  width="12"
                  className="icon icon-arrow-right icon--direction-aware"
                  viewBox="0 0 16 18"
                >
                  <path
                    d="m5 17 8-8-8-8"
                    stroke="currentColor"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <SubMenu />
    </nav>
  );
}

export default Menu;
