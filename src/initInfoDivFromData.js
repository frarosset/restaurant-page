// in the following csv file, each line refers to a section in the contact tab
import contactInfo from "./data/contact-info.json";
import contactOpeningHoursInfo from "./data/contact-opening-hours.csv";
import contactOpeningHoursInfoShort from "./data/contact-opening-hours-short.csv";
import contactIcons from "./data/contact-icons.json";
import { setFaIconAndLabel } from "./fontAwesomeUtilities.js";

export function initContactInfoDiv() {
  const contactInfoDiv = document.createElement("div");
  contactInfoDiv.classList.add("contact-info");

  Object.keys(contactInfo).forEach((key) => {
    if (key === "lon" || key === "lat") return;

    const fieldP = document.createElement("p");
    fieldP.classList.add(key);

    setFaIconAndLabel(
      fieldP,
      { prefix: contactIcons[key][0], icon: contactIcons[key][1] },
      contactInfo[key],
      true,
      "span"
    );

    contactInfoDiv.appendChild(fieldP);
  });

  return contactInfoDiv;
}

export function initLocationMapDiv() {
  const mapsDiv = document.createElement("div");
  mapsDiv.classList.add("location-map");
  mapsDiv.innerHTML = `<iframe src="https://maps.google.com/maps?q=${contactInfo.lon},${contactInfo.lat}&z=15&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return mapsDiv;
}

export function initOpeningHoursDiv(shortNotation = false) {
  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.classList.add("days-and-hours");

  const contactOpeningHoursInfoToUse = shortNotation
    ? contactOpeningHoursInfoShort
    : contactOpeningHoursInfo;

  contactOpeningHoursInfoToUse.forEach((openingHoursInfo) => {
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

  return openingHoursDiv;
}
