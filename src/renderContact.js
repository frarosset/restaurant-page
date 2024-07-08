import { removeDescendants } from "./domUtils.js";
import initGenericTab from "./initGenericTab.js";
import initGenericSection from "./initGenericSection.js";

// in the following csv file, each line refers to a section in the contact tab
import contactTabInfo from "./data/contact-info.json";
import contactTabOpeningHoursInfo from "./data/contact-opening-hours.csv";

import contactImg_0 from "./img/contact-0.jpg";
import contactImg_1 from "./img/contact-1.jpg";
import contactImg_2 from "./img/contact-2.jpg";

export default function renderContact(contentDiv) {
  removeDescendants(contentDiv);
  contentDiv.setAttribute("class", "");
  createContact(contentDiv);
}

function createContact(contentDiv) {
  initGenericTab(contentDiv, "contact");
  contentDiv.appendChild(createContactInfoSection());
  contentDiv.appendChild(createOpeningHoursSection());
  contentDiv.appendChild(createBookNowSection());
}

function createContactInfoSection() {
  const [section, txtSide] = initGenericSection("Get in Touch!", contactImg_0, {
    withSideImage: true,
    imgAlternate: true,
    imgFirst: true,
  });

  // Add contact info div
  const contactInfoDiv = document.createElement("div");
  contactInfoDiv.classList.add("contact-info");

  Object.keys(contactTabInfo).forEach((key) => {
    if (key === "lon" || key === "lat") return;

    const fieldP = document.createElement("p");
    fieldP.classList.add(key);
    fieldP.textContent = contactTabInfo[key];

    contactInfoDiv.appendChild(fieldP);
  });

  txtSide.appendChild(contactInfoDiv);

  // Add location map
  const mapsDiv = document.createElement("div");
  mapsDiv.classList.add("location-map");
  mapsDiv.innerHTML = `<iframe src="https://maps.google.com/maps?q=${contactTabInfo.lon},${contactTabInfo.lat}&z=15&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  txtSide.appendChild(mapsDiv);

  return section;
}

function createOpeningHoursSection() {
  const [section, txtSide] = initGenericSection("Opening hours", contactImg_1, {
    withSideImage: true,
    imgAlternate: true,
    imgFirst: true,
  });

  // Add contact info div
  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.classList.add("days-and-hours");

  contactTabOpeningHoursInfo.forEach((openingHoursInfo) => {
    const pDays = document.createElement("p");
    pDays.classList.add("days");
    pDays.textContent = openingHoursInfo[0];

    const pHours = document.createElement("div");
    pHours.classList.add("hours");
    openingHoursInfo[1].split(",").forEach((hour) => {
      const pHour = document.createElement("p");
      pHour.classList.add("hour");
      pHour.textContent = hour.trim();
      pHours.appendChild(pHour);
    });

    openingHoursDiv.appendChild(pDays);
    openingHoursDiv.appendChild(pHours);
  });

  txtSide.appendChild(openingHoursDiv);

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
