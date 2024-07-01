import renderHome from "./renderHome.js";
import renderAbout from "./renderAbout.js";
import renderMenu from "./renderMenu.js";
import renderContact from "./renderContact.js";

export default function initWebpage() {
  const contentDiv = document.querySelector("main#content");
  renderHome(contentDiv);

  const logoAndName = document.querySelector(".logo-and-name");
  logoAndName.contentDiv = contentDiv;
  logoAndName.addEventListener("click", (e) => {
    renderHome(e.currentTarget.contentDiv);
  });

  const aboutBtn = document.querySelector(".about-btn");
  aboutBtn.contentDiv = contentDiv;
  aboutBtn.addEventListener("click", (e) => {
    renderAbout(e.currentTarget.contentDiv);
  });

  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.contentDiv = contentDiv;
  menuBtn.addEventListener("click", (e) => {
    renderMenu(e.currentTarget.contentDiv);
  });

  const contactBtn = document.querySelector(".contact-btn");
  contactBtn.contentDiv = contentDiv;
  contactBtn.addEventListener("click", (e) => {
    renderContact(e.currentTarget.contentDiv);
  });
}
