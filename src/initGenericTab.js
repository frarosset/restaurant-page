export default function initGenericTab(contentDiv, name) {
  const titleH2 = document.createElement("h2");
  titleH2.textContent = name;

  const header = document.createElement("header");
  header.appendChild(titleH2);

  contentDiv.classList.toggle("tab", true);
  contentDiv.classList.add(name.replace(" ", "-"));
  contentDiv.appendChild(header);
}
