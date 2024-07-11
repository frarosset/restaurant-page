import initHeader from "./initHeader.js";
import renderHome from "./renderHome.js";

export default function initWebpage() {
  // Init the content div first (you need a reference to it to create links in the header)
  const contentDiv = document.createElement("main");
  contentDiv.id = "content";

  // The following div is at least as large as the visible browser window
  const screenHeightDiv = document.createElement("div");
  screenHeightDiv.classList.add("screen-height");

  // Initialize the header and append the content div to screenHeightDiv
  screenHeightDiv.appendChild(initHeader(contentDiv));
  screenHeightDiv.appendChild(contentDiv);

  // Render Home
  renderHome(contentDiv);

  // Add everything to the body
  document.querySelector("body").appendChild(screenHeightDiv);
}
