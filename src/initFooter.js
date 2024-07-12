import initLogoAndTitle from "./initLogoAndTitle.js";
import {
  initContactInfoDiv,
  initOpeningHoursDiv,
} from "./initInfoDivFromData.js";

export default function initFooter(contentDiv) {
  const footer = document.createElement("footer");

  // Append the logo and the title
  footer.appendChild(initLogoAndTitle(contentDiv));

  // Add contact info div
  footer.appendChild(initContactInfoDiv());

  // Add opening hours info div
  footer.appendChild(initOpeningHoursDiv());

  return footer;
}
