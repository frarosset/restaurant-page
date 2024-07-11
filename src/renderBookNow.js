import { removeDescendants } from "./domUtils.js";
import initBookForm from "./initBookForm.js";
import initGenericTab from "./initGenericTab.js";
import initGenericSection from "./initGenericSection.js";

import bookNowImg from "./img/book-now.jpg";

export default function renderBookNow(contentDiv) {
  removeDescendants(contentDiv);
  contentDiv.setAttribute("class", "");
  createHome(contentDiv);
}

function createHome(contentDiv) {
  initGenericTab(contentDiv, "book now");
  contentDiv.appendChild(createBookNowSection());
}

function createBookNowSection() {
  const [section, txtSide] = initGenericSection(
    "Make a reservation",
    bookNowImg,
    {
      withBgImage: true,
      withFixedImage: true,
    }
  );

  txtSide.appendChild(initBookForm());

  return section;
}
