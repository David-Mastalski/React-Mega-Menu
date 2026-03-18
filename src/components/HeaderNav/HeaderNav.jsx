import React, { useContext } from "react";
import styles from "./HeaderNav.module.css";
import { MenuContext } from "../../context/MenuContext";

function HeaderNav() {
  const { isMenuActive, setIsMenuActive, setIsSubMenuActive, setIsNestedMenuActive } = useContext(MenuContext);

  const handleCloseMegaMenu = () => {
    setIsMenuActive(false);
    setIsSubMenuActive(false);
    setIsNestedMenuActive(false);
  };

  return (
    <div className={`container ${styles.HeaderNav}`}>
      <span className={styles.logo}>LOGO</span>

      <div className={styles.menuActionBtns}>
        {isMenuActive ? (
          <button
            type="button"
            aria-label="Close Menu"
            onClick={handleCloseMegaMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 14 14"
            >
              <path
                d="M13.834 13.031L7.8 7l6.034-6.031a.568.568 0 0 0-.8-.8L7 6.2.969.166a.568.568 0 0 0-.8.8L6.2 7 .166 13.031a.568.568 0 1 0 .8.8L7 7.8l6.031 6.031a.568.568 0 0 0 .8-.8z"
                fill="#000000"
              />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            aria-label="Open Menu"
            onClick={() => setIsMenuActive(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 14"
            >
              <path
                d="M1 3.5h12a.5.5 0 0 0 0-1H1a.5.5 0 0 0 0 1zm0 4h12a.5.5 0 0 0 0-1H1a.5.5 0 0 0 0 1zm0 4h12a.5.5 0 0 0 0-1H1a.5.5 0 0 0 0 1z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default HeaderNav;
