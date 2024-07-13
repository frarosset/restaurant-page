import renderBookNow from "./renderBookNow.js";

export default function initBookNowButton(contentDiv, label) {
  const bookNowButton = document.createElement("button");
  bookNowButton.textContent = label;
  bookNowButton.classList.add("styled");
  bookNowButton.type = "button";
  bookNowButton.contentDiv = contentDiv;
  bookNowButton.addEventListener("click", (e) =>
    renderBookNow(e.currentTarget.contentDiv)
  );

  return bookNowButton;
}
