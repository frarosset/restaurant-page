import initLogoAndTitle from "./initLogoAndTitle.js";
import renderAbout from "./renderAbout.js";
import renderMenu from "./renderMenu.js";
import renderContact from "./renderContact.js";

export default function initHeader(contentDiv) {
  const header = document.createElement("header");

  // Append the logo and the title
  header.appendChild(initLogoAndTitle(contentDiv, true));

  // Append the nav meny
  header.appendChild(initNavMenu(contentDiv));

  return header;
}

function initNavMenu(contentDiv) {
  const navMenu = document.createElement("nav");

  const tabInfos = [
    ["About", "about", renderAbout],
    ["Menu", "menu", renderMenu],
    ["Contact", "contact", renderContact],
  ];

  for (const tabInfo of tabInfos) {
    // Create the button
    const button = document.createElement("button");
    button.classList.add(`${tabInfo[1]}-btn`);
    button.textContent = tabInfo[0];

    // Add event listener (it renders the corresponding tab)
    button.contentDiv = contentDiv;
    button.addEventListener("click", (e) => {
      tabInfo[2](e.currentTarget.contentDiv);
    });

    // Append to the nav
    navMenu.appendChild(button);
  }

  return navMenu;
}
