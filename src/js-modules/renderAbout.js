import { resetTab } from "../js-utilities/domUtils.js";
import initGenericTab from "./initGenericTab.js";
import initGenericSection from "./initGenericSection.js";

// in the following csv file, each line refers to a section in the about tab
import aboutTabSectionsInfo from "../data/about-sections.csv";

import aboutImg_0 from "../img/about-0.jpg";
import aboutImg_1 from "../img/about-1.jpg";
import aboutImg_2 from "../img/about-2.jpg";
import aboutImg_3 from "../img/about-3.jpg";

const aboutImg = [aboutImg_0, aboutImg_1, aboutImg_2, aboutImg_3];

export default function renderAbout(contentDiv) {
  resetTab(contentDiv);
  createAbout(contentDiv);
}

function createAbout(contentDiv) {
  initGenericTab(contentDiv, "about");

  // Create the about sections
  aboutTabSectionsInfo.forEach((sectionInfo) => {
    contentDiv.appendChild(createAboutSection(sectionInfo));
  });
}

function createAboutSection(sectionInfo) {
  const [section, txtSide] = initGenericSection(
    sectionInfo[1],
    aboutImg[sectionInfo[0]],
    { withSideImage: true, withFixedImage: true }
  );

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");
  sectionInfo[2].split("\\\\").forEach((pData) => {
    const p = document.createElement("p");
    p.textContent = pData;
    descriptionDiv.appendChild(p);
  });
  txtSide.appendChild(descriptionDiv);

  return section;
}
