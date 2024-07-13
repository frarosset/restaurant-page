import { resetTab } from "../js-utilities/domUtils.js";
import initBookNowButton from "./initBookNowButton.js";

export default function renderHome(contentDiv) {
  resetTab(contentDiv);
  createHome(contentDiv);
}

function createHome(contentDiv) {
  const homeTxtDiv = document.createElement("div");
  homeTxtDiv.classList.add("home-txt");

  const titleH2 = document.createElement("h2");
  titleH2.textContent = "One dish, countless tastes!";

  const p1 = document.createElement("p");
  p1.innerHTML = '<span class="highlight">Enjoy</span> our delicious pasta,';

  const p2 = document.createElement("p");
  p2.innerHTML = 'crafted to <span class="highlight">perfection</span>.';

  homeTxtDiv.appendChild(titleH2);
  homeTxtDiv.appendChild(p1);
  homeTxtDiv.appendChild(p2);

  contentDiv.appendChild(homeTxtDiv);
  contentDiv.classList.toggle("tab", false);
  contentDiv.classList.toggle("home", true);

  contentDiv.appendChild(initBookNowButton(contentDiv, "Book now !"));
}

// placeholder content generated with assistance from Microsoft Copilot
