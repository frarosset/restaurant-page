import { removeDescendants } from "./domUtils.js";

// in the following csv file, each line refers to a section in the contact tab
import contactTabInfo from "./data/contact-info.json";
import contactTabOpeningHoursInfo from "./data/contact-opening-hours.csv";

import contactImg_0 from "./img/contact-0.jpg";
import contactImg_1 from "./img/contact-1.jpg";
import contactImg_2 from "./img/contact-2.jpg";

const contactImg = [contactImg_0, contactImg_1, contactImg_2];

export default function renderContact(contentDiv) {
  removeDescendants(contentDiv);
  createContact(contentDiv);
}

function createContact(contentDiv) {
  const titleH2 = document.createElement("h2");
  titleH2.textContent = "contact";
  // the following class will be used to style the contact nav button when showing the contact page
  titleH2.classList.add("contact");

  const header = document.createElement("header");
  header.appendChild(titleH2);

  contentDiv.classList.toggle("tab", true);
  contentDiv.appendChild(header);
  contentDiv.appendChild(createContactInfoSection());
  contentDiv.appendChild(createOpeningHoursSection());
  contentDiv.appendChild(createDividerSection());
  contentDiv.appendChild(createBookNowSection());
}

function createContactInfoSection() {
  const titleSide = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = "Get in Touch!";
  titleSide.appendChild(h3);

  const imgSide = document.createElement("div");
  imgSide.classList.add("img");
  imgSide.style.backgroundImage = `url(${contactImg_0})`;

  const dataSide = document.createElement("div");
  dataSide.classList.add("data");

  const keys = Object.keys(contactTabInfo);
  keys.forEach((key) => {
    if (key === "lon" || key === "lat") return;

    const fieldP = document.createElement("p");
    fieldP.classList.add(key);
    fieldP.textContent = contactTabInfo[key];

    dataSide.appendChild(fieldP);
  });

  const mapsDiv = document.createElement("div");
  mapsDiv.classList.add("map");
  mapsDiv.innerHTML = `<iframe src="https://maps.google.com/maps?q=${contactTabInfo.lon},${contactTabInfo.lat}&z=15&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  dataSide.appendChild(mapsDiv);

  const section = document.createElement("section");
  const sectionSolidBg = document.createElement("div");
  sectionSolidBg.classList.add("section-solid-bg");
  sectionSolidBg.classList.add("with-side-image");

  sectionSolidBg.appendChild(titleSide);
  sectionSolidBg.appendChild(imgSide);
  sectionSolidBg.appendChild(dataSide);
  section.appendChild(sectionSolidBg);

  return section;
}

function createOpeningHoursSection() {
  const titleSide = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = "Opening hours";
  titleSide.appendChild(h3);

  const imgSide = document.createElement("div");
  imgSide.classList.add("img");
  imgSide.style.backgroundImage = `url(${contactImg_1})`;

  const openingHoursSide = document.createElement("div");
  openingHoursSide.classList.add("data");
  openingHoursSide.classList.add("days-and-hours");

  const section = document.createElement("section");
  const sectionSolidBg = document.createElement("div");
  sectionSolidBg.classList.add("section-solid-bg");
  sectionSolidBg.classList.add("with-side-image");

  sectionSolidBg.appendChild(titleSide);
  sectionSolidBg.appendChild(imgSide);
  sectionSolidBg.appendChild(openingHoursSide);
  section.appendChild(sectionSolidBg);

  contactTabOpeningHoursInfo.forEach((openingHoursInfo) => {
    const pDays = document.createElement("p");
    pDays.classList.add("days");
    pDays.textContent = openingHoursInfo[0];

    const pHours = document.createElement("p");
    pHours.classList.add("hours");
    pHours.textContent = openingHoursInfo[1];

    openingHoursSide.appendChild(pDays);
    openingHoursSide.appendChild(pHours);
  });

  return section;
}

function createBookNowSection() {
  const section = document.createElement("section");
  section.style.backgroundImage = `url(${contactImg_2})`;

  const h3 = document.createElement("h3");
  h3.textContent = "Book Now (TODO)";
  section.appendChild(h3);

  const spaceDiv = document.createElement("div");
  spaceDiv.classList.add("space");
  section.appendChild(spaceDiv);

  return section;
}

function createDividerSection() {
  const section = document.createElement("section");
  const sectionSolidBg = document.createElement("div");
  sectionSolidBg.classList.add("section-solid-bg");

  const dividerDiv = document.createElement("div");
  dividerDiv.classList.add("divider");
  sectionSolidBg.appendChild(dividerDiv);
  section.appendChild(sectionSolidBg);

  return section;
}
