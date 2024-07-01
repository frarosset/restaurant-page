export default function initGenericSection(
  title,
  imgUrl,
  withSideImage = false
) {
  //Init the section
  const section = document.createElement("section");

  // Text side: title (+ data, to be appended on the returned object)
  const titleH3 = document.createElement("h3");
  titleH3.textContent = title;

  const txtSide = document.createElement("div");
  txtSide.classList.add("txt-side");
  txtSide.appendChild(titleH3);
  section.appendChild(txtSide);

  const returnObject = [section, txtSide];

  // Image side
  if (withSideImage) {
    section.classList.add("with-side-image");

    const imgSide = document.createElement("div");
    imgSide.classList.add("img-side");
    imgSide.style.backgroundImage = `url(${imgUrl})`;
    section.appendChild(imgSide);

    returnObject.push(imgSide);
  }

  return returnObject;
}
