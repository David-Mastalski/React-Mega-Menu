import React, { useContext } from "react";
import styles from "./NestedMenu.module.css";
import { MenuContext } from "../../context/MenuContext";

function NestedMenu() {
  const {
    isNestedMenuActive,
    setIsNestedMenuActive,
    nestedMenuData,
    setMenuImgURL,
  } = useContext(MenuContext);

  const handleSetImg = (url) => {
    url && setMenuImgURL(url);
    return;
  };

  return (
    <div
      className={`${styles.nestedMenu} subMenuMobilePage ${isNestedMenuActive ? "active" : ""}`}
    >
      <div className={`subMenuContentWrapper`}>
        <div className={`subMenuCol subMenuCol--nestedMenu`}>
          <div className={`subMenuMobileImg`}>
            <button
              className={`subMenuBackBtn`}
              onClick={() => setIsNestedMenuActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
              >
                <circle cx="20" cy="20" r="20" fill="#fff"></circle>
                <g transform="translate(12,12)">
                  <path
                    d="M4.757,7.428,11.974.211a.722.722,0,0,1,1.021,1.021L6.288,7.939l6.707,6.707a.722.722,0,1,1-1.021,1.021L4.757,8.449a.722.722,0,0,1,0-1.021Z"
                    transform="translate(-1.815,0)"
                    fill="#757575"
                  ></path>
                </g>
              </svg>
              Wstecz
            </button>
          </div>
          <div className={`subMenuContent`}>
            <ul>
              {nestedMenuData?.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className={`menuItem`}
                    onMouseEnter={() => handleSetImg(item.imgURL)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NestedMenu;
