import { removeDescendants } from "./domUtils.js";
import initGenericTab from "./initGenericTab.js";
import initGenericSection from "./initGenericSection.js";
import {
  initContactInfoDiv,
  initLocationMapDiv,
  initOpeningHoursDiv,
} from "./initInfoDivFromData.js";

import contactImg_0 from "./img/contact-0.jpg";
import contactImg_1 from "./img/contact-1.jpg";

export default function renderContact(contentDiv) {
  removeDescendants(contentDiv);
  contentDiv.setAttribute("class", "");
  createContact(contentDiv);
}

function createContact(contentDiv) {
  initGenericTab(contentDiv, "contact");
  contentDiv.appendChild(createContactInfoSection());
  contentDiv.appendChild(createOpeningHoursSection());
}

function createContactInfoSection() {
  const [section, txtSide] = initGenericSection("Get in Touch!", contactImg_0, {
    withSideImage: true,
    imgAlternate: true,
    imgFirst: true,
  });

  // Add contact info div
  txtSide.appendChild(initContactInfoDiv());

  // Add location map
  txtSide.appendChild(initLocationMapDiv());

  return section;
}

function createOpeningHoursSection() {
  const [section, txtSide] = initGenericSection("Opening hours", contactImg_1, {
    withSideImage: true,
    imgAlternate: true,
    imgFirst: true,
  });

  // Add contact info div
  txtSide.appendChild(initOpeningHoursDiv());

  return section;
}
