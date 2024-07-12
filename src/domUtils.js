export function removeDescendants(elem) {
  while (elem.hasChildNodes()) {
    removeDescendants(elem.lastChild);
    elem.removeChild(elem.lastChild);
  }
}

export function resetTab(contentDiv) {
  removeDescendants(contentDiv);
  contentDiv.setAttribute("class", "");
  window.scrollTo(0, 0);
}
