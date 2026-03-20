const data = [
  {
    category: "laptopy",
    name: "Laptopy i Komputery",
    imgURL: "/images/computers-laptops.webp",
    seeAll: "#",
    submenu: [
      {
        name: "Laptopy",
        id: "laptopy-main",
        seeAll: "#",
        nestedMenu: [
          {
            name: "Gamingowe",
            url: "",
            imgURL: "/images/gaming-laptops.webp",
          },
          {
            name: "Biznesowe",
            url: "",
            imgURL: "/images/business-laptops.webp",
          },
          { name: "Ultrabooki", url: "", imgURL: "/images/ultrabooks.webp" },
        ],
      },
      {
        name: "Podzespoły",
        id: "podzespoly",
        seeAll: "#",
        nestedMenu: [
          { name: "Karty graficzne", url: "" },
          { name: "Procesory", url: "" },
        ],
      },
    ],
  },
  {
    category: "smartfony",
    name: "Smartfony i Zegarki",
    imgURL: "/images/phones-watches.webp",
    submenu: [
      {
        name: "Telefony",
        id: "telefony",
        nestedMenu: [
          {
            name: "Apple",
            url: "",
          },
          { name: "Samsung", url: "" },
          { name: "Xiaomi", url: "" },
        ],
      },
      {
        name: "Smartwatche",
        id: "smartwatche",
        nestedMenu: [
          { name: "Sportowe", url: "" },
          { name: "Klasyczne", url: "" },
        ],
      },
      {
        name: "Akcesoria",
        id: "akcesoria-tel",
        nestedMenu: [
          { name: "Etui", url: "" },
          { name: "Szkła ochronne", url: "" },
        ],
      },
    ],
  },
  {
    category: "rtv",
    name: "Telewizory i Audio",
    seeAll: "#",
    submenu: [
      {
        name: "Telewizory",
        id: "telewizory",
        seeAll: "#",
        nestedMenu: [
          { name: "OLED", url: "" },
          { name: "QLED", url: "" },
          { name: "Akcesoria TV", url: "" },
        ],
      },
      {
        name: "Audio",
        id: "audio",
        seeAll: "#",
        nestedMenu: [
          { name: "Soundbary", url: "" },
          { name: "Głośniki BT", url: "" },
        ],
      },
      {
        name: "Słuchawki",
        id: "sluchawki",
        seeAll: "#",
        nestedMenu: [
          { name: "Bezprzewodowe", url: "" },
          { name: "Douszne", url: "" },
        ],
      },
      {
        name: "Kino Domowe",
        id: "kino-domowe",
        seeAll: "#",
        nestedMenu: [
          { name: "Amplitunery", url: "" },
          { name: "Zestawy kolumn", url: "" },
        ],
      },
    ],
  },
  {
    category: "agd",
    name: "AGD do kuchni",
    submenu: [
      {
        name: "Lodówki",
        id: "lodowki",
        nestedMenu: [
          { name: "Wolnostojące", url: "" },
          { name: "Do zabudowy", url: "" },
          { name: "Side by Side", url: "" },
        ],
      },
      {
        name: "Ekspresy",
        id: "ekspresy",
        nestedMenu: [
          { name: "Automatyczne", url: "" },
          { name: "Kolbowe", url: "" },
        ],
      },
      {
        name: "Płyty grzewcze",
        id: "plyty",
        nestedMenu: [
          { name: "Indukcyjne", url: "" },
          { name: "Gazowe", url: "" },
        ],
      },
      {
        name: "Piekarniki",
        id: "piekarniki",
        nestedMenu: [
          { name: "Elektryczne", url: "" },
          { name: "Parowe", url: "" },
        ],
      },
      {
        name: "Małe AGD",
        id: "male-agd",
        nestedMenu: [
          { name: "Blendery", url: "" },
          { name: "Tostery", url: "" },
        ],
      },
    ],
  },
];

export default data;
