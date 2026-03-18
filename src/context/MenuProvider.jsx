import { useState } from "react";
import { MenuContext } from "./MenuContext";

export function MenuProvider({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);
  const [isNestedMenuActive, setIsNestedMenuActive] = useState(false);

  const [menuData, setMenuData] = useState([]);
  const [subMenuActiveItem, setSubMenuActiveItem] = useState([]);
  const [nestedMenuData, setNestedMenuData] = useState([]);
  const [menuImgURL, setMenuImgURL] = useState("");

  return (
    <MenuContext.Provider
      value={{
        isMenuActive,
        setIsMenuActive,
        isSubMenuActive,
        setIsSubMenuActive,
        isNestedMenuActive,
        setIsNestedMenuActive,
        menuData,
        setMenuData,
        subMenuActiveItem,
        setSubMenuActiveItem,
        nestedMenuData,
        setNestedMenuData,
        menuImgURL,
        setMenuImgURL,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
