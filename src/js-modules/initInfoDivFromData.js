// in the following csv file, each line refers to a section in the contact tab
import contactInfo from "../data/contact-info.json";
import contactOpeningHoursInfo from "../data/contact-opening-hours.csv";
import contactOpeningHoursInfoShort from "../data/contact-opening-hours-short.csv";
import contactIcons from "../data/contact-icons.json";
import {
  setFaIconAndLabel,
  setFaIcon,
} from "../js-utilities/fontAwesomeUtilities.js";

export function initContactInfoDiv() {
  const contactInfoDiv = document.createElement("div");
  contactInfoDiv.classList.add("contact-info");

  const contactInfoListDiv = document.createElement("div");
  contactInfoListDiv.classList.add("contact-list");
  contactInfoDiv.appendChild(contactInfoListDiv);

  Object.keys(contactInfo).forEach((key) => {
    if (key === "lon" || key === "lat" || key === "social") return;

    const fieldP = document.createElement("p");
    fieldP.classList.add(key);

    setFaIconAndLabel(
      fieldP,
      { prefix: contactIcons[key][0], icon: contactIcons[key][1] },
      contactInfo[key],
      true,
      "span"
    );

    contactInfoListDiv.appendChild(fieldP);
  });

  const contactSocialDiv = document.createElement("div");
  contactSocialDiv.classList.add("contact-social");
  contactInfoDiv.appendChild(contactSocialDiv);

  Object.keys(contactInfo.social).forEach((key) => {
    const socialA = document.createElement("a");
    socialA.href = contactInfo.social[key];
    socialA.classList.add("contact-social-a");
    contactSocialDiv.appendChild(socialA);
    setFaIcon(
      socialA,
      { prefix: contactIcons[key][0], icon: contactIcons[key][1] },
      true
    );
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
