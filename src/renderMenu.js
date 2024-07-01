import { removeDescendants } from "./domUtils.js";

// in the following csv file, each line refers to a section in the menu tab
import menuTabSectionsInfo from "./data/menu-sections.csv";
// in the following csv file, each line refers to a dish in the menu tab
import menuTabDishesInfo from "./data/menu-dishes.csv";

import menuImg_0 from "./img/menu-0.jpg";
import menuImg_1 from "./img/menu-1.jpg";
import menuImg_2 from "./img/menu-2.jpg";
import menuImg_3 from "./img/menu-3.jpg";
import menuImg_4 from "./img/menu-4.jpg";

const menuImg = [menuImg_0, menuImg_1, menuImg_2, menuImg_3, menuImg_4];

export default function renderMenu(contentDiv) {
  removeDescendants(contentDiv);
  createMenu(contentDiv);
}

function createMenu(contentDiv) {
  const titleH2 = document.createElement("h2");
  titleH2.textContent = "menu";
  // the following class will be used to style the menu nav button when showing the menu page
  titleH2.classList.add("menu");

  const header = document.createElement("header");
  header.appendChild(titleH2);

  const sections = [];
  const dishesSides = [];
  menuTabSectionsInfo.forEach((sectionInfo) => {
    const titleSide = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.textContent = sectionInfo[1];
    titleSide.appendChild(h3);

    const imgSide = document.createElement("div");
    imgSide.classList.add("img");
    imgSide.style.backgroundImage = `url(${menuImg[sectionInfo[0]]})`;

    const dishesSide = document.createElement("div");
    dishesSide.classList.add("dishes");

    const section = document.createElement("section");
    section.classList.add("has-subsections");
    const sectionSolidBg = document.createElement("div");
    sectionSolidBg.classList.add("section-solid-bg");

    sectionSolidBg.appendChild(titleSide);
    sectionSolidBg.appendChild(imgSide);
    sectionSolidBg.appendChild(dishesSide);
    section.appendChild(sectionSolidBg);

    sections.push(section);
    dishesSides.push(dishesSide);
  });

  menuTabDishesInfo.forEach((dishInfo) => {
    const h4AndPrice = document.createElement("div");
    h4AndPrice.classList.add("h4-and-price");

    const h4 = document.createElement("h4");
    h4.textContent = dishInfo[0];

    const pPrice = document.createElement("span");
    pPrice.textContent = dishInfo[2];
    pPrice.classList.add("price");

    const pIngredients = document.createElement("p");
    pIngredients.textContent = dishInfo[3];

    const dish = document.createElement("div");
    h4AndPrice.appendChild(h4);
    h4AndPrice.appendChild(pPrice);
    dish.appendChild(h4AndPrice);
    dish.appendChild(pIngredients);

    dishesSides[dishInfo[1]].appendChild(dish);
  });

  contentDiv.classList.toggle("tab", true);
  contentDiv.appendChild(header);
  sections.forEach((section) => contentDiv.appendChild(section));
}
