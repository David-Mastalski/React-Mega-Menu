import React, { useContext, useRef } from "react";
import NestedMenu from "../NestedMenu/NestedMenu";
import { MenuContext } from "../../context/MenuContext";
import ImageContainer from "../ImageContainer/ImageContainer";

function SubMenu() {
  const {
    isSubMenuActive,
    setIsSubMenuActive,
    setIsNestedMenuActive,
    menuData,
    setNestedMenuData,
    subMenuActiveItem,
    setSubMenuActiveItem,
  } = useContext(MenuContext);

  const subMenuRef = useRef(null);

  const handleSetNestedMenu = (data) => {
    setIsNestedMenuActive(true);
    setNestedMenuData(data.nestedMenu);
    setSubMenuActiveItem(data.id);
  };

  return (
    <div
      ref={subMenuRef}
      className={`subMenu subMenuMobilePage ${isSubMenuActive ? "active" : ""}`}
    >
      <div className={`subMenuContentWrapper`}>
        <div className={`subMenuCol subMenuCol--subMenu`}>
          <div className={`subMenuMobileImg`}>
            <button
              className={`subMenuBackBtn`}
              onClick={() => setIsSubMenuActive(false)}
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
              {menuData.submenu?.map((item) => (
                <li key={item.id}>
                  {" "}
                  <button
                    className={`menuItem`}
                    onClick={() => handleSetNestedMenu(item)}
                    aria-expanded={subMenuActiveItem === item.id}
                  >
                    {item.name}
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
        </div>
      </div>
      <NestedMenu />
      {menuData.imgURL && <ImageContainer />}
    </div>
  );
}

export default SubMenu;
