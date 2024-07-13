// in the following csv file, each line refers to a section in the contact tab

import formData from "../data/book-form-info.json";
import { setFaIconAndLabel } from "../js-utilities/fontAwesomeUtilities.js";

export default function initBookForm() {
  const form = document.createElement("form");

  for (const inputKey in formData) {
    const input = initFormInput(inputKey);
    form.appendChild(input);
  }

  const submitButton = document.createElement("button");
  submitButton.textContent = "Book !";
  submitButton.classList.add("styled");
  form.appendChild(submitButton);
  return form;
}

function initFormInput(id) {
  const data = formData[id];

  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement(data.element);

  div.appendChild(label);
  div.appendChild(input);

  div.classList.add(`${id}-input-div`);

  input.id = `${id}-input`;
  input.name = id;
  for (const key in data.constraints) {
    input[key] = data.constraints[key];
  }

  if (data.dateRange) {
    setDateRange(input, data.dateRange);
  }

  label.for = input.id;
  setFaIconAndLabel(
    label,
    { prefix: data.icon[0], icon: data.icon[1] },
    data.label
  );

  return div;
}

function setDateRange(input, dateRange) {
  // see https://sebhastian.com/javascript-get-tomorrow-date/
  const addDaysToToday = (daysToAdd) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);

    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    const year = date.getFullYear();

    // format yyyy-mm-dd
    return `${year}-${month}-${day}`;
  };

  input.min = addDaysToToday(dateRange[0]);
  input.max = addDaysToToday(dateRange[1]);
}
