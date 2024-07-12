import { resetTab } from "./domUtils.js";
import initGenericTab from "./initGenericTab.js";
import initGenericSection from "./initGenericSection.js";

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
  resetTab(contentDiv);
  createMenu(contentDiv);
}

function createMenu(contentDiv) {
  initGenericTab(contentDiv, "menu");

  // Create the menu sections
  menuTabSectionsInfo.forEach((sectionInfo) =>
    contentDiv.appendChild(createMenuSection(sectionInfo))
  );

  // Add the dishes in the proper sections
  const dishesDivs = [...contentDiv.querySelectorAll(".dishes")];
  menuTabDishesInfo.forEach((dishInfo) => createDish(dishInfo, dishesDivs));
}

function createMenuSection(menuData) {
  const [section, txtSide] = initGenericSection(
    menuData[1],
    menuImg[menuData[0]],
    { withSideImage: true, imgAlternate: true, hasSubsections: true }
  );

  const dishesDiv = document.createElement("div");
  dishesDiv.classList.add("dishes");
  txtSide.appendChild(dishesDiv);

  return section;
}

function createDish(dishInfo, dishesDivs) {
  const h4 = document.createElement("h4");
  h4.textContent = dishInfo[0];

  const pPrice = document.createElement("span");
  pPrice.textContent = dishInfo[2];
  pPrice.classList.add("price");

  const pIngredients = document.createElement("p");
  pIngredients.textContent = dishInfo[3];

  const dish = document.createElement("div");
  dish.classList.add("dish");

  dish.appendChild(h4);
  dish.appendChild(pPrice);
  dish.appendChild(pIngredients);

  dishesDivs[dishInfo[1]].appendChild(dish);
}
